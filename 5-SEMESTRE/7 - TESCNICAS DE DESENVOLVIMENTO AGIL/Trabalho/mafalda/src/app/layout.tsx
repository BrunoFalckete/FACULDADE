import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import ThemeProvider from '@/provider/ThemeProvider'
import Navbar from './components/navbar'
import ProtectedRoute from './components/protectedRoute'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pets For Home',
  description: 'Pets For Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/pets-4-home-light.svg" sizes="any" />
      <body>
        <ProtectedRoute>
          <ThemeProvider>
            <Navbar />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeProvider>
        </ProtectedRoute>
      </body>
    </html>
  )
}
