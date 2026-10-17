import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCHIVE — The Past Is Not Past | Nigerian Cultural Museum",
  description:
    "An evolving digital museum celebrating Nigerian creative history through Photography, Music, Fashion, and Design. Sourcing 510+ verified historical references, master archives, and living contemporary lineages.",
  keywords: [
    "Nigerian cultural archive",
    "J.D. Okhai Ojeikere",
    "Fela Kuti",
    "Shade Thomas-Fahm",
    "FESTAC 77",
    "African modernism",
    "Highlife music",
    "Aso-Oke weaving",
    "Lagos creative history",
  ],
  authors: [{ name: "ARCHIVE Five-Agent Cultural Studio" }],
  creator: "ARCHIVE Digital Museum",
  publisher: "ARCHIVE Curation Trust",
  openGraph: {
    title: "ARCHIVE — The Past Is Not Past",
    description:
      "A fictional digital museum celebrating Nigerian creative history through Photography, Music, Fashion, and Design.",
    url: "https://archive.museum.ng",
    siteName: "ARCHIVE",
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-archival-900 text-archival-100 font-sans selection:bg-terracotta selection:text-white">
        {/* Skip to Main Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-terracotta focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-2xl focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
