import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Data Insights Portfolio | Usman Gujjer',
  description: "Portfolio of Usman Gujjer, a Business Intelligence Analyst, AI Automation Expert, and Data Scientist.",
  openGraph: {
    title: 'Data Insights Portfolio | Usman Gujjer',
    description: "Portfolio of Usman Gujjer, a Business Intelligence Analyst, AI Automation Expert, and Data Scientist.",
    url: 'https://data-insights-portfolio.firebaseapp.com', // Placeholder URL
    siteName: 'Data Insights Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
