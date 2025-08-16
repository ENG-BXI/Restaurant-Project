import {Star} from 'lucide-react';
import CustomCard from '../_Components/CustomCard';
import {Variants} from 'motion';
import * as motion from 'motion/react-client';

const CustomerReviews = () => {
  const VariantRight: Variants = {
    start: {
      x: 100,
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
    <section id='CustomerReviews' className='mt-15 container overflow-x-hidden! mx-auto'>
      <h2 className='section__title mb-10'>اراء عملائنا</h2>
      <motion.div variants={VariantRight} initial='start' whileInView='end' viewport={{once: true}} className='flex justify-center gap-3 overflow-x-auto mb-4'>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
      </motion.div>
      <motion.div variants={VariantLeft} initial='start' whileInView='end' viewport={{once: true}} className='flex justify-center gap-3 overflow-x-auto'>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
        <CustomCard className='min-w-80!'>
          <div className='flex justify-center gap-x-2'>
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='fill-primary-Normal w-5 h-5 text-primary-Normal ' fill='true' />
            <Star className='w-5 h-5 text-primary-Normal' />
          </div>
          <p className='text-center my-1'>&quot;تجربة خرافية! الطعم يفوز بكل المقاييس، والجو في المطعم رايق جدًا.&quot;</p>
          <span className='block text-center'>— سارة.ح—</span>
        </CustomCard>
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
