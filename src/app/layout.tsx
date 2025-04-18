import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
// Import the ScrollToTop component at the top of the file
import { ScrollToTop } from "@/src/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nanocore Systems LLP - Precision Staffing for Semiconductor Industry",
  description:
    "Nanocore Systems provides skilled semiconductor professionals on our payroll, ready to support your projects when and where you need them.",
    generator: 'powered by Next.js',
  applicationName: "Nanocore Systems",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'