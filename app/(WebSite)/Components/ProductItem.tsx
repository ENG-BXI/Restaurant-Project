import {Button} from '@/app/Components/ShadCn/button';
import Image from 'next/image';

function ProductItem() {
  return (
    <div className='flex flex-col  bg-[#0E0413] p-2 rounded-3xl w-[300px] border border-transparent duration-500 hover:border-second-Dark-hover'>
      <Image className='mx-auto' src='./Assets/Images/ProductImage.svg' height={300} width={300} alt='Product Image' />
      <h5>المشاوي النارية</h5>
      <p>لحم بلدي متبل بتتبيلة سرية، مشوي على الفحم، يُقدم مع خبز الطابون وصلصة طحينية مميزة.</p>
      <div className='flex justify-between items-center'>
        <span>السعر: 45 ريال</span>
        <Button>تفاصيل</Button>
      </div>
    </div>
  );
}

export default ProductItem;
