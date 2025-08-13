import {Label} from '@/app/Components/ShadCn/label';
import {Textarea} from '@/app/Components/ShadCn/textarea';
import React from 'react';
import UploadImage from '../Components/UploadImage';
import {Input} from '@/app/Components/ShadCn/input';

const EditWhyUS = () => {
  return (
    <section className='mb-15'>
      <h2 className='section__title'>قسم لماذا نحن</h2>
      <div>
        <h3 className='text-M-h3 mb-5 text-second-Normal font-semibold'>الكارد الاول</h3>
        <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
          <div className='w-full md:w-1/2'>
            <Label>العنوان</Label>
            <Input />
          </div>
          <div className='w-full md:w-1/2'>
            <Label>التفاصيل</Label>
            <Textarea />
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-M-h3 mb-5 text-second-Normal font-semibold'>الكارد الثاني</h3>
        <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
          <div className='w-full md:w-1/2'>
            <Label>العنوان</Label>
            <Input />
          </div>
          <div className='w-full md:w-1/2'>
            <Label>التفاصيل</Label>
            <Textarea />
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-M-h3 mb-5 text-second-Normal font-semibold'>الكارد الثالث</h3>
        <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
          <div className='w-full md:w-1/2'>
            <Label>العنوان</Label>
            <Input />
          </div>
          <div className='w-full md:w-1/2'>
            <Label>التفاصيل</Label>
            <Textarea />
          </div>
        </div>
      </div>
      <div>
        <Label>صورة من نحن</Label>
        <UploadImage />
      </div>
    </section>
  );
};

export default EditWhyUS;
