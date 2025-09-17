import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import './globals.css'
import '@liveblocks/react-ui/styles.css'
import '@liveblocks/react-tiptap/styles.css'
import { ConvexClientProvider } from '@/components/convex-client-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Real-time editor similar to google docs with live collaboration Created by Momen Yasser',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
