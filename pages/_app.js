import '../styles/globals.css'
import { Open_Sans } from '@next/font/google'

const open = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open',
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return  <div className={`${open.variable} font-sans bg-[#DDDDDD]`}><Component {...pageProps} /></div>
}
