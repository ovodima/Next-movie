import Link from 'next/link'
import './globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  with: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-monserrat'
})

export const metadata = {
  title: 'Movies',
  description: 'App develop by dima.tsx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}` } >
          <header className="bg-black py-6">
            <div className="container flex items-center justify-between">
              <a href="#" className="text-blue-light text-xl font-bold ml-5">Movies</a>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href='/' className="text-gray-400 hover:text-white">Home</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        {children}
        </body>
    </html>
  )
}
