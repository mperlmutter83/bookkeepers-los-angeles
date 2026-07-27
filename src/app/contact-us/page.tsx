import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Bookkeeping Service Los Angeles",
  description:
    "Schedule your free bookkeeping consultation. Call (323) 709-8818 or visit us at 355 S. Grand Ave Suite 2450, Los Angeles, CA 90071.",
};

const contactCards = [
  { icon: "📞", title: "Phone", value: "(323) 709-8818", href: "tel:+13237098818" },
  {
    icon: "✉️",
    title: "Email",
    value: "info@bookkeeperslosangeles.com",
    href: "mailto:info@bookkeeperslosangeles.com",
  },
  {
    icon: "📍",
    title: "Address",
    value: "355 S. Grand Ave Suite 2450, Los Angeles, CA 90071",
    href: "https://maps.google.com/?q=355+S+Grand+Ave+Suite+2450+Los+Angeles+CA+90071",
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide comprehensive bookkeeping services including financial reporting, payroll management, and tax preparation tailored for small businesses.",
  },
  {
    q: "How can bookkeeping help my business?",
    a: "Accurate bookkeeping ensures you have a clear picture of your financial health, helping you make informed business decisions and stay compliant with tax regulations.",
  },
  {
    q: "Are your services affordable for small businesses?",
    a: "Yes, we offer cost-effective solutions that are designed to fit the budget of small businesses, providing excellent value without compromising quality.",
  },
  {
    q: "How do you ensure data security?",
    a: "We use advanced encryption and secure servers to protect your financial data, ensuring confidentiality and peace of mind.",
  },
  {
    q: "Can I customize the services I need?",
    a: "Absolutely, we offer flexible packages that allow you to choose the services that best meet your business needs.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Expert Bookkeeping Services for Small Businesses
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
              Streamline Your Finances with Us
            </h1>
            <p className="text-lg leading-relaxed">
              Discover how our tailored bookkeeping solutions can save you time and money, allowing
              you to focus on growing your business.
            </p>
          </div>
          <Image
            src="/images/unsplash-meeting-2.jpg"
            alt="Bookkeeping consultation in Los Angeles"
            width={800}
            height={800}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {contactCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h2 className="font-heading text-lg font-semibold mb-2">{c.title}</h2>
              <p className="text-accent">{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Schedule Your Consultation Today
          </h2>
          <p className="text-center mb-10 leading-relaxed">
            Ready to optimize your bookkeeping? Book a consultation with our experts and take the
            first step towards financial clarity.
          </p>
          <LeadForm />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
            Common Questions About Our Bookkeeping Services
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-heading font-semibold cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Simplify Your Finances?
          </h2>
          <a
            href="tel:+13237098818"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
