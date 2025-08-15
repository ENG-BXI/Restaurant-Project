import {Label} from '@/app/Components/ShadCn/label';
import UploadImage from '../_Components/UploadImage';
import {Textarea} from '@/app/Components/ShadCn/textarea';

const EditAboutUs = () => {
  return (
    <section className='mb-15'>
      <h2 className='section__title'>قسم من نحن؟</h2>
      <div className=' w-full mb-10'>
        <Label>نص من نحن</Label>
        <Textarea />
      </div>
      <div>
        <Label>صورة من نحن</Label>
        <UploadImage />
      </div>
    </section>
  );
};

export default EditAboutUs;
