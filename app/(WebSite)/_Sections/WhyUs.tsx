import Image from 'next/image';
import CustomCard from '../_Components/CustomCard';
import * as motion from 'motion/react-client';
import {Variants} from 'motion';

const WhyUs = () => {
  const VariantRight: Variants = {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1,
      transition: {
        ease: 'linear',

        staggerChildren: 0.5
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
        ease: 'linear',

        duration: 1
      }
    }
  };

  return (
    <section id='WhyUs' className='mt-15 container overflow-x-hidden! mx-auto'>
      <h2 className='section__title mb-10'>لماذا نحن ؟</h2>
      <div className='max-w-[900px] flex flex-col items-center mx-auto md:items-stretch md:flex-row md:justify-center gap-5 '>
        <motion.div variants={VariantRight} initial='start' whileInView='end' viewport={{once: true}} className='flex md:flex-col items-center justify-center md:w-1/2 gap-3 flex-wrap my-10'>
          <CustomCard>
            <h4 className='text-center text-M-h4 font-bold mb-2'>نكهة لا تُنسى</h4>
            <p className='text-center'>نختار مكوناتنا بعناية، ونطبخها بشغف… علشان كل لقمة تكون قصة تحكي عن الطعم الأصيل.</p>
          </CustomCard>
          <CustomCard>
            <h4 className='text-center text-M-h4 font-bold mb-2'>نكهة لا تُنسى</h4>
            <p className='text-center'>نختار مكوناتنا بعناية، ونطبخها بشغف… علشان كل لقمة تكون قصة تحكي عن الطعم الأصيل.</p>
          </CustomCard>
          <CustomCard>
            <h4 className='text-center text-M-h4 font-bold mb-2'>نكهة لا تُنسى</h4>
            <p className='text-center'>نختار مكوناتنا بعناية، ونطبخها بشغف… علشان كل لقمة تكون قصة تحكي عن الطعم الأصيل.</p>
          </CustomCard>
        </motion.div>
        <motion.div variants={VariantLeft} initial='start' whileInView='end' viewport={{once: true}} className='max-h-[600px] w-full md:w-1/2 aspect-square md:aspect-[1/2] overflow-hidden '>
          <Image className='mx-auto h-full w-full object-cover rounded-3xl' src='/Assets/Images/WhyUsImage.png' height={200} width={500} alt='WhyUsImage' />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
