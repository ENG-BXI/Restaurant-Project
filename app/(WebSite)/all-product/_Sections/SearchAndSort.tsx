import CustomButton from '@/app/Components/CustomButton';
import PrimaryButton from '@/app/Components/PrimaryButton';
import {Button} from '@/app/Components/ShadCn/button';
import {Input} from '@/app/Components/ShadCn/input';

const SearchAndSort = () => {
  return (
    <section className='container mx-auto mt-5'>
      <div className='flex gap-x-3 items-center mb-5'>
        <span className='section__title mb-0!'>بحث</span>
        <Input className='w-100 text-primary bg-second-Normal rounded-3xl border-0 focus:border-primary' />
        <PrimaryButton>بحث</PrimaryButton>
      </div>
      <div className='flex gap-x-3 overflow-auto'>
        <CustomButton text='الكل' isActive />
        <CustomButton text='المشاوي النارية' />
        <CustomButton text='أطباق الدجاج' />
        <CustomButton text='الأرز والمقبلات الساخنة' />
        <CustomButton text='السلطات والمقبلات الباردة' />
      </div>
    </section>
  );
};

export default SearchAndSort;
