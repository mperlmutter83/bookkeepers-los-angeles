import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookkeeperslosangeles.com"),
  title: "Bookkeeping Service Los Angeles | The Best in Bookkeeping",
  description:
    "Streamline your finances with expert bookkeeping solutions tailored for small businesses in Los Angeles. Monthly reporting, accounts payable, payroll processing.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bookkeeperslosangeles.com",
  name: "Bookkeeping Service Los Angeles",
  url: "https://bookkeeperslosangeles.com",
  telephone: "(323) 709-8818",
  email: "info@bookkeeperslosangeles.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "355 S. Grand Ave Suite 2450",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90071",
    addressCountry: "US",
  },
  description:
    "Expert bookkeeping solutions tailored for small businesses in Los Angeles: monthly financial reporting, accounts payable management, and payroll processing.",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexCondensed.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
