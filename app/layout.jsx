import { Roboto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio | ELias Ousameur",
  description:
    "Développeur full-stack junior – découvrez mes projets, mon parcours et contactez-moi.",
  keywords: ["portfolio", "développeur", "Next.js", "fullstack", "web"],
  authors: [{ name: "Ousameur Elias", url: "https://elias.ousameur.com" }],
  openGraph: {
    title: "Portfolio | Ousameur Elias",
    description:
      "Découvrez mes projets et compétences de développeur full-stack.",
    url: "https://ousameur-elias.vercel.app",
    siteName: "Portfolio Ousameur Elias",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Portfolio Ousameur Elias",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={robotoSerif} suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="flex flex-col m-0 min-h-screen">
        <Header />
        <main className="flex-1 h-full w-full mx-auto  max-w-[80%] lg:max-w-[70%] p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
