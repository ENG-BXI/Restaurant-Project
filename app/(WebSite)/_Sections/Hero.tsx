import PrimaryButton from '@/app/Components/PrimaryButton';
import {Variants} from 'motion';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const Variant: Variants = {
    start: {
      y: -50,
      opacity: 0
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1.2
      }
    }
  };
  return (
    <motion.section variants={Variant} initial='start' animate='end' className='flex flex-col items-center text-center container mx-auto'>
      <div className='my-10'>
        <h1 className='text-M-h1 sm:text-D-h3'>
          من أول لقمة
          <br /> بتعرف إنك وصلت المكان الصح.
        </h1>
        <h2 className='section__title my-3'>أطلق جوعك، ودع الباقي علينا.</h2>
        <Link href='#Products'>
          <PrimaryButton>شاهد قائمتنا</PrimaryButton>
        </Link>
      </div>
      <Image src='/Assets/Images/HeroImage.png' height={200} width={800} alt='Hero Image' />
    </motion.section>
  );
};

export default Hero;
