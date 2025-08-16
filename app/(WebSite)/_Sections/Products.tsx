import Link from 'next/link';
import ProductItem from '../_Components/ProductItem';
import PrimaryButton from '@/app/Components/PrimaryButton';
import * as motion from 'motion/react-client';
import {Variants} from 'motion';

const Products = () => {
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
    <section id='Products' className='mt-10 flex flex-col items-center'>
      <h2 className='section__title'>منتجاتنا</h2>
      <motion.div variants={Variant} initial='start' whileInView='end' viewport={{once: true}} className='grid gap-5 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </motion.div>
      <Link href='/all-products'>
        <PrimaryButton>المزيد...</PrimaryButton>
      </Link>
    </section>
  );
};

export default Products;
