import EditHero from './_Sections/EditHero';
import EditAboutUs from './_Sections/EditAboutUs';
import EditWhyUS from './_Sections/EditWhyUs';
import EditContactUs from './_Sections/EditContactUs';
import PrimaryButton from '@/app/Components/PrimaryButton';

const page = () => {
  return (
    <>
      <EditHero />
      <EditAboutUs />
      <EditWhyUS />
      <EditContactUs />
      <div className='mt-5 flex justify-end items-center'>
        <PrimaryButton>اضافة</PrimaryButton>
        <PrimaryButton>الغاء</PrimaryButton>
      </div>
    </>
  );
};

export default page;
