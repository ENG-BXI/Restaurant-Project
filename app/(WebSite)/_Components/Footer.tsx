import Logo from '@/app/Components/Logo';
import {Twitter, Facebook, Instagram} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='container mx-auto mt-15 '>
      <div className='flex gap-x-10 items-start px-10 mb-15 '>
        <Logo />
        <div className='flex-grow-1 grid gap-4 grid-cols-[100px_1fr] sm:grid-cols-[100px_repeat(2,1fr)]'>
          <div className='flex flex-col'>
            <h4 className='text-M-h3 mb-2'>الاقسام</h4>
            <Link href='/#' className='text-M-h5 font-light'>الرئيسية</Link>
            <Link href='/#AboutUs' className='text-M-h5 font-light'>من نحن؟</Link>
            <Link href='/#Products' className='text-M-h5 font-light'>منتجاتنا</Link>
            <Link href='/#WhyUs' className='text-M-h5 font-light'>لماذا نحن</Link>
            <Link href='/#CustomerReviews' className='text-M-h5 font-light'>اراء عملائنا </Link>
          </div>
          <div className='flex flex-col gap-y-3'>
            <div>
              <h4 className='text-M-h3 mb-2'>العنوان</h4>
              <span className='text-M-h5 font-light'>الرياض – حي العليا – شارع الأمير محمد بن عبدالعزيز</span>
            </div>
            <div>
              <h4 className='text-M-h3 mb-2'>الهاتف</h4>
              <span className='text-M-h5 font-light'>+966 55 123 4567</span>
            </div>
            <div>
              <h4 className='text-M-h3 mb-2'>الإيميل</h4>
              <span className='text-M-h5 font-light'>info@naham.sa</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-M-h3 mb-2'>تابعونا</h4>
            <div className='flex items-center'>
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className='h-10 pt-3 border-t border-second-Darker'>
        <p className='text-center text-M-p'>© 2025 نَهم | NAHAM – جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
