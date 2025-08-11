import Image from 'next/image';

const WhyUs = () => {
  return (
    <section className='mt-15'>
      <h2 className='section__title'>لماذا نحن ؟</h2>
      <div className='flex justify-center gap-3  flex-wrap my-10'>
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
      <Image className='mx-auto' src='./Assets/Images/WhyUsImage.svg' height={200} width={500} alt='WhyUsImage' />
    </section>
  );
};

export default WhyUs;
function CustomCard() {
  return (
    <div className={`bg-second-Normal rounded-3xl text-black w-70 p-4`}>
      <h4 className='text-center text-M-h4 font-bold mb-2'>نكهة لا تُنسى</h4>
      <p className='text-center'>نختار مكوناتنا بعناية، ونطبخها بشغف… علشان كل لقمة تكون قصة تحكي عن الطعم الأصيل.</p>
    </div>
  );
}
