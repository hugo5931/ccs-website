import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://cambridgecreativesynergy.org'),
  title: {
    default: "Cambridge Creative Synergy Community - Mental Health & Well-Being Support",
    template: "%s | Cambridge Creative Synergy Community"
  },
  description: "A welcoming community in Cambridge offering free weekly gatherings every Friday (12-4pm) for mental health support, companionship, cooking together, and creative activities. No booking required.",
  keywords: ["Cambridge community", "mental health support", "well-being", "social connection", "Cambridge activities", "free community events", "loneliness support", "Cambridge support group"],
  authors: [{ name: "Cambridge Creative Synergy Community" }],
  creator: "Cambridge Creative Synergy Community",
  publisher: "Cambridge Creative Synergy Community",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cambridgecreativesynergy.org',
    siteName: 'Cambridge Creative Synergy Community',
    title: 'Cambridge Creative Synergy Community - Mental Health & Well-Being Support',
    description: 'Free weekly gatherings every Friday for mental health support, companionship, and creative activities in Cambridge.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cambridge Creative Synergy Community gathering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cambridge Creative Synergy Community',
    description: 'Free weekly gatherings every Friday for mental health support and companionship in Cambridge.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
