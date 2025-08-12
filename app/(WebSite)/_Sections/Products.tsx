import Link from 'next/link';
import ProductItem from '../_Components/ProductItem';
import PrimaryButton from '@/app/Components/PrimaryButton';

const Products = () => {
  return (
    <section id='Products' className='mt-10 flex flex-col items-center'>
      <h2 className='section__title'>منتجاتنا</h2>
      <div className='grid gap-5 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Link href='/all-products'>
        <PrimaryButton>المزيد...</PrimaryButton>
      </Link>
    </section>
  );
};

export default Products;
