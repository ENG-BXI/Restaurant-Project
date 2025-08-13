import {Input} from '@/app/Components/ShadCn/input';
import {Label} from '@/app/Components/ShadCn/label';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/app/Components/ShadCn/select';
import {Textarea} from '@/app/Components/ShadCn/textarea';
import UploadImage from '../../Components/UploadImage';
import PrimaryButton from '@/app/Components/PrimaryButton';

const page = () => {
  return (
    <section>
      <h2 className='text-M-h2 text-second-Normal font-bold mb-5'>اضافة منتج جديد</h2>
      <div className='flex gap-x-3 w-full item-center mb-10'>
        <div className='w-full'>
          <Label>اسم المنتج</Label>
          <Input />
        </div>
        <div className='w-full'>
          <Label>سعر المنتج</Label>
          <Input />
        </div>
      </div>
      <div className=' w-full mb-10'>
        <Label>تفاصيل المنتج</Label>
        <Textarea />
      </div>
      <div className=' w-full mb-10'>
        <Label>تفاصيل المنتج</Label>
        <Select>
          <SelectTrigger className='dark flex-row-reverse bg-second-Normal text-primary-Normal! min-w-100'>
            <SelectValue placeholder='اختر الصنف' />
          </SelectTrigger>
          <SelectContent className='dark'>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>صورة المنتج</Label>
        <UploadImage />
      </div>
      <div className='mt-5 flex justify-end items-center'>
        <PrimaryButton>اضافة</PrimaryButton>
        <PrimaryButton>الغاء</PrimaryButton>
      </div>
    </section>
  );
};

export default page;
