import './globals.css'

export const metadata = {
  title: 'Dictionary Web App',
  description: 'Dictionary Web App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
