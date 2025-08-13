import {Input} from '@/app/Components/ShadCn/input';
import {Label} from '@/app/Components/ShadCn/label';
import {Textarea} from '@/app/Components/ShadCn/textarea';

const EditContactUs = () => {
  return (
    <section className='mb-15'>
      <h2 className='section__title'>قسم تواصل معنا</h2>
      <div className=' w-full mb-10'>
        <Label>نص تواصل معنا</Label>
        <Textarea />
      </div>
      <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
        <div className='w-full'>
          <Label>رقم الهاتف</Label>
          <Input type='number' />
        </div>
        <div className='w-full'>
          <Label>الايميل</Label>
          <Input type='email' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-3 w-full item-center mb-10'>
        <div className='w-full'>
          <Label>رابط حساب الانستا</Label>
          <Input />
        </div>
        <div className='w-full'>
          <Label>رابط حساب الفيس</Label>
          <Input />
        </div>
      </div>
      <div className=' w-full '>
        <Label>رابط حساب التويتر</Label>
        <Input />
      </div>
    </section>
  );
};

export default EditContactUs;
