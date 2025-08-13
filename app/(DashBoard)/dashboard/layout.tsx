import './../../globals.css';
import {ReactNode} from 'react';
import localFont from 'next/font/local';
import SideBar from './Components/SideBar';
const cairoFont = localFont({src: './../../../public/Assets/Fonts/Cairo-VariableFont_slnt,wght.ttf'});

const layout = ({children}: {children: ReactNode}) => {
  return (
    <html lang='en' dir='rtl'>
      <body className={`dashboard relative bg-linear-to-b from-[#09020D] to-[#060606] text-white min-h-screen  max-w-screen  flex  ${cairoFont.className}`}>
        <SideBar /> <div className='my-10 ml-10 mr-30 md:mr-10 py-5 px-10 bg-primary-Normal max-w-full min-h-screen max-h-min grow overflow-x-hidden rounded-3xl'>{children}</div>
      </body>
    </html>
  );
};

export default layout;
