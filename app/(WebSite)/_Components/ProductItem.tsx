import PrimaryButton from '@/app/Components/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';

function ProductItem() {
  return (
    <div className='flex flex-col  bg-[#0E0413] p-2 rounded-3xl max-w-[300px] border border-transparent duration-500 hover:border-second-Normal group'>
      <div className='h-full w-full rounded-4xl overflow-hidden'>
        <Image className='mx-auto object-fill group-hover:scale-110 duration-500' src='./../Assets/Images/ProductImage.svg' height={300} width={300} alt='Product Image' />
      </div>
      <h5 className='text-D-h5 my-3 '>المشاوي النارية</h5>
      <p className='text-D-p font-light'>لحم بلدي متبل بتتبيلة سرية، مشوي على الفحم، يُقدم مع خبز الطابون وصلصة طحينية مميزة.</p>
      <div className='flex justify-between items-center'>
        <span>السعر: 45 ريال</span>
        {/* Will change by Product Index */}
        <Link href='/product/1'>
          <PrimaryButton>تفاصيل</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
