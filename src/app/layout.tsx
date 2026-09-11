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
  title: "Bookkeepers Los Angeles | The Best in Bookkeeping",
  description:
    "Streamline your finances with expert bookkeeping solutions tailored for small businesses in Los Angeles. Monthly reporting, accounts payable, payroll processing.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bookkeeperslosangeles.com",
  name: "Bookkeepers Los Angeles",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NNH33VX5');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexCondensed.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNH33VX5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
