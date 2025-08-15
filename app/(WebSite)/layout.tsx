import './../globals.css';
import localFont from 'next/font/local';
import Header from './_Components/Header';
import Footer from './_Components/Footer';

const cairoFont = localFont({src: './../../public/Assets/Fonts/Cairo-VariableFont_slnt,wght.ttf'});
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='rtl'>
      <body className={`bg-linear-to-b overflow-x-hidden! from-[#09020D] to-[#060606] text-white min-h-screen ${cairoFont.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
