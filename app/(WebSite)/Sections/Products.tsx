import {Button} from '@/app/Components/ShadCn/button';
import ProductItem from '../Components/ProductItem';

const Products = () => {
  return (
    <section className='mt-10 flex flex-col items-center'>
      <h2 className='section__title'>منتجاتنا</h2>
      <div className='grid gap-5 place-items-center grid-cols-1 md:grid-cols-2 my-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Button>المزيد...</Button>
    </section>
  );
};

export default Products;
