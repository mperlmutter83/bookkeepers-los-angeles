import Link from "next/link";
import Image from "next/image";

const features = [
  "Personalized Solutions",
  "Cost-Effective Services",
  "Expert Financial Guidance",
  "Reliable Support",
];

const services = [
  {
    icon: "📊",
    title: "Monthly Financial Reporting",
    desc: "Stay informed with comprehensive monthly reports that provide insights into your business\u2019s financial health.",
  },
  {
    icon: "🧾",
    title: "Accounts Payable Management",
    desc: "Ensure timely payments and maintain strong supplier relationships with our efficient accounts payable services.",
  },
  {
    icon: "💼",
    title: "Payroll Processing",
    desc: "Accurate and timely payroll services to keep your employees satisfied and your business compliant.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Efficient Financial Management for Small Businesses
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bookkeeping Service Los Angeles
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Streamline your finances with our expert bookkeeping solutions tailored for small
              businesses. Experience precision, reliability, and peace of mind.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-accent transition-colors"
            >
              Get Started Today
            </Link>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/unsplash-meeting-1.jpg"
              alt="Bookkeeping team meeting in Los Angeles"
              width={800}
              height={800}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature bar */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3">
              <span className="text-accent text-xl">✓</span>
              <p className="font-heading font-semibold text-sm md:text-base">{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Our Bookkeeping Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                <p className="leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">
            Key Features of Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-3">
                Tailored Bookkeeping Solutions
              </h3>
              <p className="mb-6 leading-relaxed">
                Our services are customized to meet the unique needs of your business, ensuring you
                get exactly what you need.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-accent text-white font-semibold px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-3">Affordable Pricing Plans</h3>
              <p className="mb-6 leading-relaxed">
                We offer competitive pricing plans designed to fit the budget of small businesses
                without compromising quality.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-accent text-white font-semibold px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors"
              >
                Discover Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About company */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <p className="mb-8 leading-relaxed">
              Bookkeeping Service Los Angeles is dedicated to providing top-notch bookkeeping
              solutions tailored to the needs of small businesses. Our mission is to offer
              cost-effective and efficient financial management services that empower business
              owners to focus on growth and success. With years of experience and a commitment to
              excellence, we pride ourselves on being the best in bookkeeping.
            </p>
            <Link
              href="/about-us"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-accent transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <Image
            src="/images/unsplash-meeting-2.jpg"
            alt="Small business financial planning session"
            width={800}
            height={800}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Get Started Today
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to streamline your bookkeeping? Contact us for a free consultation and discover
            how our services can benefit your business. Let us help you achieve financial clarity
            and peace of mind.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
