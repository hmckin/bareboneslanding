import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'barebones - Dead simple ticketing',
  description: 'Kill your prioritization doubts with barebones ticketing system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
