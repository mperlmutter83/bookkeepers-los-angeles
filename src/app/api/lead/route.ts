import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/lead — forwards the contact form to the Yes Crew CRM.
 * form_key stays server-side; the browser never talks to the CRM directly.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service_needed, company_website, elapsed_ms, submission_id } = body;

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const res = await fetch(
      `https://yescrew-dashboard.vercel.app/api/forms/${process.env.CRM_FORM_KEY}/submit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service_needed,
          company_website,
          elapsed_ms,
          submission_id,
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "CRM rejected the submission" }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
