import {Button} from '@/app/Components/ShadCn/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col items-center text-center container mx-auto'>
      <div className='my-10'>
        <h1 className='text-M-h1'>
          من أول لقمة
          <br /> بتعرف إنك وصلت المكان الصح.
        </h1>
        <h2 className='section__title my-3'>أطلق جوعك، ودع الباقي علينا.</h2>
        <Button>شاهد قائمتنا</Button>
      </div>
      <Image src='./Assets/Images/HeroImage.svg' height={200} width={600} alt='Hero Image' />
    </section>
  );
};

export default Hero;
