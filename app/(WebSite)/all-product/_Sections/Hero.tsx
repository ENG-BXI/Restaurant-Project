import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative h-[500px] w-full aspect-video'>
      <Image className='h-full w-full object-cover ' src='./Assets/Images/AllProductHeroImage.svg' width={800} height={500} alt='Hero Image' />
      <div className='absolute top-1/2 left-1/2 -translate-1/2'>
        <h1 className='section__title font-bold mb-0!'>منتجاتنا</h1>
        <p className='section__title font-bold'>&quot;من كل لقمة… حكاية طعم&quot; </p>
      </div>
    </section>
  );
};

export default Hero;
