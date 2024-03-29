import type { Metadata } from 'next'
import { Nunito,Open_Sans,Playfair_Display,Poppins,Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Nav from './components/Nav'
import localFont from "next/font/local";


const nunito = Nunito({ subsets: ['latin'],
weight:["200","300","400","500","600","700","800","900"],
variable:'--font-nunito' })

const playfair = Playfair_Display({ subsets: ['latin'],
weight:["400","500","600","700","800","900"],
variable:'--font-playfair' })

const poppins = Poppins({ subsets: ['latin'],
weight:["400","500","600","700","800","900"],
variable:'--font-poppins' })
const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-opensans",
});
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mont",
});
const silka = localFont({
  src: "../public/silka-regular-webfont.ttf",
  variable: "--font-silka",
});
export const metadata: Metadata = {
  title: 'Comprehensive List of Marketing Agencies in Nigeria - Find an Agency',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${silka.variable}`}
    >
      <body>
   {/* <Navbar/> */}
   <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
