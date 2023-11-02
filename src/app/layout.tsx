import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './_components/nav'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Jesus Velarde',
  description: 'Jesus Velarde\'s personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
