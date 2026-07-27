import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bookkeeping Service Los Angeles"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-heading font-semibold text-sm md:text-base leading-tight">
            Bookkeeping Service<br className="hidden md:block" /> Los Angeles
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+13237098818"
          className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          (323) 709-8818
        </a>
      </div>
      <nav className="lg:hidden bg-navy-light border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto py-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
