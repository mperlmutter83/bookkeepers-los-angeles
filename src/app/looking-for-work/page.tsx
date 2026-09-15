import type { Metadata } from "next";
import WorkForm from "@/components/WorkForm";

const PHONE_DISPLAY = "(323) 709-8818";
const PHONE_HREF = "tel:+13237098818";

export const metadata: Metadata = {
  title: "Looking for Work | Bookkeepers Los Angeles",
  description:
    "Looking for bookkeeping work in Los Angeles? Local bookkeeping firms are hiring. Fill out the quick form and we'll connect you — or call (323) 709-8818.",
  alternates: { canonical: "https://bookkeeperslosangeles.com/looking-for-work" },
};

const STEPS = [
  {
    n: "1",
    title: "Tell us about yourself",
    body: "A quick 60-second form — no resume, no cover letter, no endless applications.",
  },
  {
    n: "2",
    title: "We connect you",
    body: "We share your details with local bookkeeping businesses that are actively hiring.",
  },
  {
    n: "3",
    title: "You hear back directly",
    body: "Interested businesses contact you by phone, usually within a few days.",
  },
];

const WORK_TYPES = [
  "Full-Charge Bookkeeping",
  "Accounts Payable/Receivable",
  "Payroll Processing",
  "Bank Reconciliation",
  "QuickBooks Cleanup",
  "Monthly Reporting",
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            Looking for Work?
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Bookkeeping Work in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Local bookkeeping firms are growing and looking for dependable people. Tell us about
            yourself and we&apos;ll connect you with businesses that are hiring — free, fast, and
            no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-full bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block rounded-full border-2 border-accent px-7 py-3 font-semibold text-accent hover:bg-accent/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl bg-gray-50 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-body max-w-2xl mx-auto">
            Bookkeeping businesses across Los Angeles hire for a range of roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-navy font-medium shadow-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-navy text-center">
            Apply in 60 Seconds
          </h2>
          <p className="mt-2 text-center text-body">
            Free and confidential — we&apos;ll only share your details with businesses that are
            hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-body">
          Own a bookkeeping business and need reliable people?{" "}
          <a href={PHONE_HREF} className="font-bold text-accent underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
