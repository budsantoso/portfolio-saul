import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heading = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saul Carlos Immanuel Simatupang — IT Governance, Risk & Compliance & Infrastructure Specialist",
    template: "%s | Saul Carlos Immanuel Simatupang",
  },
  description: "IT Governance, Risk & Compliance (GRC) & Infrastructure Specialist with experience across UPH, Bank Danamon, Siloam Hospitals, and PT ESB. Expert in COBIT 2019, ITIL, ISO 27001, IT Asset Management, MikroTik, and AppSheet.",
  authors: [{ name: "Saul Carlos Immanuel Simatupang", url: "https://saul.switchcode.id" }],
  creator: "Saul Carlos Immanuel Simatupang",
  publisher: "Saul Carlos Immanuel Simatupang",
  keywords: [
    "Saul Carlos Immanuel Simatupang",
    "IT Governance",
    "IT GRC",
    "IT Risk Management",
    "COBIT 2019",
    "ITIL",
    "ISO 27001",
    "IT Asset Management",
    "IT Infrastructure",
    "MikroTik",
    "AppSheet",
    "Switch Code",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://saul.switchcode.id",
    siteName: "Saul Carlos Immanuel Simatupang — Portfolio",
    title: "Saul Carlos Immanuel Simatupang — IT GRC & Infrastructure Specialist",
    description: "Aligning technology initiatives with enterprise standards, safeguarding IT operations through ISO 27001, ITIL, and COBIT 2019 governance.",
    images: [
      {
        url: "https://saul.switchcode.id/images/profile.jpg",
        width: 400,
        height: 460,
        alt: "Saul Carlos Immanuel Simatupang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saul Carlos Immanuel Simatupang — IT GRC & Infrastructure Specialist",
    description: "Aligning technology initiatives with enterprise standards, safeguarding IT operations through ISO 27001, ITIL, and COBIT 2019 governance.",
    images: ["https://saul.switchcode.id/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${sans.variable} ${heading.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/profile.jpg" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
