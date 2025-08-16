import Image from 'next/image';
import * as motion from 'motion/react-client';
import {Variants} from 'motion';

const Hero = () => {
  const VariantRight: Variants = {
    start: {
      x: 100,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'linear',
        delay: 0.3
      }
    }
  };
  const VariantLeft: Variants = {
    start: {
      x: -100,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'linear',
        delay: 0.3
      }
    }
  };
  return (
    <section className='container overflow-x-hidden! mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center gap-x-[150px] gap-y-2 items-center'>
        <motion.div variants={VariantLeft} initial='start' animate='end' viewport={{once: true}} className='aspect-video lg:aspect-square lg:order-2 w-full lg:w-1/3 overflow-hidden'>
          <Image className='object-cover h-full w-full' src='./../Assets/Images/HeroProductImage.svg' width={500} height={500} alt='Hero Image' />
        </motion.div>
        <motion.div variants={VariantRight} initial='start' animate='end' viewport={{once: true}} className='flex flex-col lg:order-1 gap-y-3 lg:gap-y-8 lg:w-1/3'>
          <h1 className='text-M-h2 lg:text-D-h3'>كباب نَهم الملوكي</h1>
          <h3 className='text-M-h4 lg:text-D-h5'>&quot;لحم بلدي طازج، مُتبل بتتبيلة نَهم السرية، مشوي على الفحم حتى الكمال، يُقدم مع خبز الطابون وسلطة طازجة.&quot;</h3>
          <div className='flex flex-col lg:flex-row gap-x-15 gap-y-2 items-start lg:items-center '>
            <div className='rounded-3xl  px-5 py-1 bg-second-Normal text-primary '>كباب نَهم الملوكي</div>
            <h5 className='mx-7 lg:mx-0'>45 ريال سعودي</h5>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
