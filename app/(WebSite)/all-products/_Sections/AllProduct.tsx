import {Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from '@/app/Components/ShadCn/pagination';
import ProductItem from '../../_Components/ProductItem';
import * as motion from 'motion/react-client';
import {Variants} from 'motion';

const AllProduct = () => {
  const Variant: Variants = {
    start: {
      y: '10%',
      opacity: 0
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };
  return (
    <section className='container mx-auto  mt-15'>
      <motion.div variants={Variant} initial='start' animate='end' viewport={{once: true}} className='place-items-center grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </motion.div>
      <div className='mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default AllProduct;
