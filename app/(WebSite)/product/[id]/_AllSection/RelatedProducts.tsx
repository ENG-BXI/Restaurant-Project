import ProductItem from '@/app/(WebSite)/_Components/ProductItem';

const RelatedProducts = () => {
  return (
    <section className='container mx-auto mt-15'>
      <h2 className='section__title text-start! mx-20'>قد يعجبك أيضًا</h2>
      <div className='place-items-center mx-20 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default RelatedProducts;
