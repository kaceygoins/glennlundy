import './globals.css'

export const metadata = {
  title: '800% Life | Glenn Lundy',
  description: 'Elevate your life one morning at a time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}