import './../globals.css';
import localFont from 'next/font/local';
import Header from './Sections/Header';

const cairoFont = localFont({src: './../../public/Assets/Fonts/Cairo-VariableFont_slnt,wght.ttf'});
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='rtl'>
      <body className={`bg-linear-to-b from-[#09020D] to-[#060606] text-white h-screen ${cairoFont.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
