import ProductItem from '@/app/(WebSite)/_Components/ProductItem';
import {Variants} from 'motion';
import * as motion from 'motion/react-client';

const RelatedProducts = () => {
  const Variant: Variants = {
    start: {
      y: '10%',
      opacity: 0
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'linear',
        staggerChildren: 0.7
      }
    }
  };
  return (
    <section className='container mx-auto mt-15'>
      <h2 className='section__title text-start! mx-20'>قد يعجبك أيضًا</h2>
      <motion.div variants={Variant} initial='start' whileInView='end' viewport={{once: true}} className='place-items-center mx-20 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </motion.div>
    </section>
  );
};

export default RelatedProducts;
