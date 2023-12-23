/* Components */
import { Providers } from '../lib/providers'

/* Instruments */
import styles from '../styles/layout.module.css'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  )
}
