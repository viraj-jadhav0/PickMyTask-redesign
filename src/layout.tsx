import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Work_Sans, Raleway } from "next/font/google"

const workSans = Work_Sans({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  )
}
