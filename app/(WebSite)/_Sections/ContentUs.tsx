import {Facebook, Instagram, Mail, Phone, Twitter} from 'lucide-react';
import {Variants} from 'motion';
import * as motion from 'motion/react-client';

const ContentUs = () => {
  const VariantRight: Variants = {
    start: {
      x: 100,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  const VariantLeft: Variants = {
    start: {
      x: -100,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  return (
    <section id='ContentUs' className='mt-15 container mx-auto'>
      <h2 className='section__title'>تواصل معنا</h2>
      <div className='flex flex-col md:flex-row md:justify-between gap-10 items-center text-center bg-second-Normal rounded-4xl text-primary w-full mx-auto p-4 pt-5 '>
        <motion.div variants={VariantRight} initial='start' whileInView='end' viewport={{once: true}} className='md:w-1/2'>
          <h4 className='text-M-h4 md:text-D-h4 md:text-start font-semibold'>نحن في نَهم | NAHAM نرحب بأسئلتك، اقتراحاتك، وحتى ملاحظاتك… لأننا نؤمن أن رأيك يهمنا.</h4>
          <div className='grid grid-cols-2 md:grid-cols-1 md:place-items-start gap-3 justify-around  my-3'>
            <h5 className='md:text-M-h3 md:font-bold'>
              <a href='tel:+966 55 123 4567'>
                +966 55 123 4567 <Phone className='inline-block' />
              </a>
            </h5>
            <h5 className='md:text-M-h3 md:font-bold'>
              <a href='mailto:info@naham.sa'>
                info@naham.sa <Mail className='inline-block' />
              </a>
            </h5>
            <div className='flex col-span-2 md:col-span-1 justify-center items-center '>
              <a href='/www.twitter.com'>
                <Twitter className='md:w-[30px] md:h-[30px]' />
              </a>
              <a href='/www.facebook.com'>
                <Facebook className='md:w-[30px] md:h-[30px]' />
              </a>
              <a href='/www.instagram.com'>
                <Instagram className='md:w-[30px] md:h-[30px]' />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={VariantLeft} initial='start' whileInView='end' viewport={{once: true}} className='overflow-hidden w-full md:w-1/2 h-50 md:h-100 rounded-4xl'>
          <iframe className='w-full h-full' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.76332015767895!2d49.12768063032487!3d14.535896831795167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e5001000557b%3A0x1a1c7facc2cdb40e!2z2LTYsdmD2Ycg2LnYsdioINmI2YrYsdiv2YjYsiDZhNmE2K3ZhNmI2YQg2KfZhNiq2YLZhtmK2Yc!5e0!3m2!1sar!2s!4v1754986721083!5m2!1sar!2s' allowFullScreen={true} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentUs;
