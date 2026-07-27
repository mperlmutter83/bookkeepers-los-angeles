import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Bookkeeping Service Los Angeles",
  description:
    "Expert bookkeeping solutions for small businesses in Los Angeles: financial reporting, expense tracking, payroll processing, and more.",
};

const mainServices = [
  {
    icon: "📊",
    title: "Comprehensive Financial Reporting",
    desc: "Gain insights into your business\u2019s financial health with detailed reports that help you make informed decisions.",
  },
  {
    icon: "🧾",
    title: "Expense Tracking & Management",
    desc: "Efficiently track and manage your expenses to ensure accurate budgeting and financial planning.",
  },
  {
    icon: "💼",
    title: "Payroll Processing",
    desc: "Ensure timely and accurate payroll processing, keeping your employees satisfied and your business compliant.",
  },
];

const whyChoose = [
  "Personalized Service",
  "Advanced Technology",
  "Cost-Effective Solutions",
  "Expertise in Small Business Needs",
  "Secure Data Handling",
  "Real-Time Financial Monitoring",
  "Scalable Services",
  "Transparent Pricing",
  "Dedicated Support",
  "Comprehensive Training",
  "Seamless Integration",
  "Customizable Reports",
  "Proactive Financial Advice",
  "Regulatory Compliance",
  "Flexible Service Plans",
];

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We specialize in working with small businesses across various industries, providing tailored bookkeeping solutions to meet their unique needs.",
  },
  {
    q: "How secure is my financial data?",
    a: "Your financial data is highly secure with us. We use advanced encryption technologies and adhere to strict privacy policies to protect your information.",
  },
  {
    q: "Can you help with tax preparation?",
    a: "Yes, our Premium Plan includes quarterly tax preparation services, ensuring you stay compliant and maximize your deductions.",
  },
  {
    q: "Do you offer customized bookkeeping solutions?",
    a: "Absolutely. We understand that every business is different, and we offer customized solutions to fit your specific requirements.",
  },
  {
    q: "How do I get started with your services?",
    a: "Getting started is easy. Simply contact us through our website or call us, and we\u2019ll guide you through the onboarding process.",
  },
  {
    q: "What is the cost of your services?",
    a: "We offer competitive pricing with our Standard Plan starting at $199/month and our Premium Plan at $399/month. Contact us for more details.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
              Expert Bookkeeping Solutions for Small Businesses
            </h1>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-4">
              Transform Your Business with Our Services
            </h2>
            <p className="mb-6 leading-relaxed">
              Discover how our tailored bookkeeping services can streamline your financial
              management and empower your business to thrive.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-accent transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Our Bookkeeping Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                <p className="leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Bookkeeping Services?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-lg p-4 text-center flex items-center justify-center"
              >
                <p className="font-heading font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Common Questions
          </h2>
          <p className="text-center mb-10">
            Find answers to the most frequently asked questions about our bookkeeping services.
          </p>
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
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Transform Your Business Finances Today
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Unlock the potential of your business with our expert bookkeeping services. Whether
            you\u2019re a startup or an established company, our tailored solutions provide the
            financial clarity you need to thrive.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
