import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Portfolio website built using Next.js 14, TailwindCss and shadcn",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srikarkudurmalla.vercel.app/',
    title: 'Srikar | Portfolio',
    description:
      'Portfolio website built using Next.js 14, TailwindCSS and Shadcn on vercel.',
    siteName: 'Srikar | Portfolio',
    countryName: 'India',
  },
};
export default function RootLayout({ children }:{
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics/>
          
        </body>
      </html>
    </>
  )
}