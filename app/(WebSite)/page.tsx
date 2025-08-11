import Hero from './Sections/Hero';
import AboutUs from './Sections/AboutUs';
import Products from './Sections/Products';
import WhyUs from './Sections/WhyUs';

const page = () => {
  return (
    <div className='px-10'>
      <Hero />
      <AboutUs />
      <Products />
      <WhyUs />
    </div>
  );
};

export default page;
