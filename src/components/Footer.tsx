import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-heading font-semibold text-lg mb-2">Bookkeeping Service Los Angeles</p>
          <p className="text-white/70 text-sm leading-relaxed">
            Expert bookkeeping solutions tailored for small businesses. Precision, reliability, and peace of mind.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-heading font-semibold mb-2">Contact</p>
          <p className="text-white/70">355 S. Grand Ave Suite 2450<br />Los Angeles, CA 90071</p>
          <p className="mt-2">
            <a href="tel:+13237098818" className="text-accent hover:underline">(323) 709-8818</a>
          </p>
          <p>
            <a href="mailto:info@bookkeeperslosangeles.com" className="text-accent hover:underline">
              info@bookkeeperslosangeles.com
            </a>
          </p>
        </div>
        <div className="text-sm">
          <p className="font-heading font-semibold mb-2">Quick Links</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/about-us" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/contact-us" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Bookkeeping Service Los Angeles. All rights reserved.
      </div>
    </footer>
  );
}
