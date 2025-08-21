import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Bag Manufacturing | Bulk Orders & Custom Branding",
  description:
    "Trusted partner for high-quality bags in bulk. From schools to corporates – we design, manufacture, and deliver premium bags worldwide.",
  generator: "Zaheer Sons",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
