import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center'>
        <header className='container navbar bg-base-100 flex items-center justify-between'>
          <nav>
            <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link href='/admin' className="btn btn-ghost normal-case text-xl">Admin</Link>
          </nav>
          <div>
            <button className="btn">Sign In</button>
            <button className="btn btn-neutral">Sign Out</button>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
