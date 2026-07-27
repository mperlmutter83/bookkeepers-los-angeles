import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Bookkeeping Service Los Angeles",
  description:
    "Bookkeeping Service Los Angeles is dedicated to empowering small businesses with precise and affordable bookkeeping solutions.",
};

const achievements = [
  {
    year: "2016",
    title: "Best Bookkeeping Service",
    desc: "Awarded by the Small Business Association for our commitment to excellence and client satisfaction.",
  },
  {
    year: "2019",
    title: "Innovation in Financial Services",
    desc: "Recognized for our innovative use of technology in bookkeeping by the Financial Services Innovation Forum.",
  },
  {
    year: "2022",
    title: "Top Service Provider",
    desc: "Honored by the National Bookkeeping Association for our outstanding service and dedication to small business success.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
            Your Trusted Partner in Financial Clarity
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Bookkeeping Service Los Angeles
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled accuracy and efficiency with our expert bookkeeping solutions
            tailored for small businesses.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Our Commitment to Excellence
          </h2>
          <p className="mb-6 leading-relaxed">
            At Bookkeeping Service Los Angeles, we are dedicated to empowering small businesses with
            precise and affordable bookkeeping solutions. Our mission is to simplify financial
            management, allowing entrepreneurs to focus on growth and innovation. We envision a
            future where every small business can thrive with the support of transparent and
            reliable financial services. Guided by our core values of integrity, accuracy, and
            customer-centricity, we strive to deliver exceptional value and foster long-term
            partnerships with our clients.
          </p>
          <p className="leading-relaxed">
            Founded on the principles of trust and efficiency, Bookkeeping Service Los Angeles has
            been serving the local business community with dedication and expertise. Our vision is
            to revolutionize the way small businesses manage their finances, providing them with
            the tools and insights needed to succeed in a competitive market. We believe in making
            high-quality bookkeeping accessible to all, ensuring that every client receives
            personalized attention and solutions that fit their unique needs.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((a) => (
              <div key={a.year} className="bg-gray-50 rounded-xl p-8 text-center">
                <p className="text-accent font-heading text-3xl font-bold mb-2">{a.year}</p>
                <h3 className="font-heading text-xl font-semibold mb-3">{a.title}</h3>
                <p className="leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Reach Out for Expert Bookkeeping
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how our tailored bookkeeping solutions can streamline your business operations
            and save you money. Contact us today to learn more or to book your personalized
            consultation with our experts.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
