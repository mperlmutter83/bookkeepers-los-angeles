import { NextRequest, NextResponse } from "next/server";

// "Looking for Work" applicants are emailed directly to Mike in addition to
// landing in the CRM. Uses the shared Resend account (verified sender: yesidoinc.com).
const NOTIFY_TO = "yescrewnetwork@gmail.com";
const FROM = "Bookkeepers Los Angeles <info@yesidoinc.com>";
const DOMAIN = "bookkeeperslosangeles.com";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function notifyWorkApplicant(opts: {
  name: string;
  phone: string;
  email: string | null;
  serviceNeeded: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY not set" };

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;">
      <h2 style="margin:0 0 12px;">New work applicant — ${DOMAIN}</h2>
      <p><strong>Name:</strong> ${escapeHtml(opts.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(opts.phone)}</p>
      ${opts.email ? `<p><strong>Email:</strong> ${escapeHtml(opts.email)}</p>` : ""}
      ${opts.serviceNeeded ? `<p><strong>Details:</strong> ${escapeHtml(opts.serviceNeeded)}</p>` : ""}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="font-size:13px;color:#888;">Reply directly to this email to respond to the applicant.</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: NOTIFY_TO,
        replyTo: opts.email || undefined,
        subject: `New work applicant — ${opts.name} (${DOMAIN})`,
        html,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend send failed:", res.status, errText);
      return { ok: false, error: `Resend ${res.status}: ${errText}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("Resend send error:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * POST /api/lead — forwards the contact form to the Yes Crew CRM.
 * form_key stays server-side; the browser never talks to the CRM directly.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, service_needed, company_website, elapsed_ms, submission_id } = body;

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const isWorkApplicant = service === "Looking for Work";
    const serviceNeeded =
      service_needed ||
      (isWorkApplicant ? `Service: Looking for Work | Source: ${DOMAIN}` : null);

    const res = await fetch(
      `https://yescrew-dashboard.vercel.app/api/forms/${process.env.CRM_FORM_KEY}/submit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service_needed: serviceNeeded,
          company_website,
          elapsed_ms,
          submission_id,
        }),
      }
    );

    // Work applicants always get emailed to Mike — even if the CRM hiccups,
    // no job seeker is lost.
    let emailResult: { ok: boolean; error?: string } | null = null;
    if (isWorkApplicant) {
      emailResult = await notifyWorkApplicant({
        name,
        phone,
        email: email || null,
        serviceNeeded,
      });
    }
    const emailed = emailResult?.ok ?? false;

    if (!res.ok) {
      console.error("CRM form submit failed:", res.status);
      if (isWorkApplicant && emailed) {
        return NextResponse.json(
          { ok: true, workApplicantEmailed: true },
          { status: 201 }
        );
      }
      return NextResponse.json({ error: "CRM rejected the submission" }, { status: 502 });
    }

    return NextResponse.json(
      {
        ok: true,
        workApplicantEmailed: isWorkApplicant ? emailed : undefined,
        workApplicantEmailError: emailResult?.error,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
