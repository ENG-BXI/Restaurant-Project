import Image from 'next/image';
import * as motion from 'motion/react-client';
import {Variants} from 'motion';

const AboutUs = () => {
  const VariantRight: Variants = {
    start: {
      x: 100,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3
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
        duration: 1,
        delay: 0.3
      }
    }
  };
  return (
    <section id='AboutUs' className='container mx-auto mt-10'>
      <h2 className='section__title'>من نحن ؟</h2>
      <div className='max-w-[900px] mx-auto  flex flex-col md:flex-row md:items-start md:text-start gap-10 items-center text-center mt-5 '>
        <motion.p variants={VariantRight} initial='start' whileInView='end' viewport={{once: true}} className='md:text-D-h5 md:pt-5 md:w-1/2'>
          تأسس مطعم نَهم بدافع الشغف الحقيقي بالأكل الراقي والنكهات الأصيلة. مزجنا بين روح المطبخ العربي وأسلوب التقديم العصري، علشان نقدّم لك وجبة تفتح النفس وتعيش معها لحظة &quot;نهم&quot; ما تنساها. <br />
          كل طبق عندنا يتجهز بعناية، من مكونات مختارة بعناية، وبتفاصيل طهي دقيقة، وكل هذا في جو أنيق ومريح يناسب كل الأذواق. <br /> سواء جاي تجرب المنيو لأول مرة، أو من زبائننا المخلصين... نعدك إن &quot;نَهم&quot; دايمًا بيشبع ذوقك قبل جوعك.
          <br /> &quot;أطلق جوعك، ودع الباقي علينا.&quot;
        </motion.p>
        <motion.div variants={VariantLeft} initial='start' whileInView='end' viewport={{once: true}} className='aspect-square md:aspect-[1/2] md:max-h-[800px] md:w-1/2 overflow-hidden'>
          <Image className='rounded-2xl h-full object-cover' src='./Assets/Images/AboutUsImage_D.svg' height={800} width={800} alt='About Us Image' />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
