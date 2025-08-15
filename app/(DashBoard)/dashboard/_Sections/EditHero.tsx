import {Input} from '@/app/Components/ShadCn/input';
import {Label} from '@/app/Components/ShadCn/label';
import React from 'react';
import UploadImage from '../_Components/UploadImage';

const EditHero = () => {
  return (
    <section className='mb-15'>
      <h2 className='section__title'>قسم الهيرو</h2>
      <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
        <div className='w-full'>
          <Label>العنوان الرئيسي</Label>
          <Input />
        </div>
        <div className='w-full'>
          <Label>العنوان الفرعي</Label>
          <Input />
        </div>
      </div>
      <div>
        <Label>صورة الهيرو</Label>
        <UploadImage />
      </div>
    </section>
  );
};

export default EditHero;
