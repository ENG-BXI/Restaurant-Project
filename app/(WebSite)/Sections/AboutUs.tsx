import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='container mx-auto mt-10'>
      <h2 className='section__title'>من نحن ؟</h2>
      <div className='flex flex-col gap-10 items-center text-center mt-5'>
        <p className=''>
          تأسس مطعم نَهم بدافع الشغف الحقيقي بالأكل الراقي والنكهات الأصيلة. مزجنا بين روح المطبخ العربي وأسلوب التقديم العصري، علشان نقدّم لك وجبة تفتح النفس وتعيش معها لحظة &quot;نهم&quot; ما تنساها. <br />
          كل طبق عندنا يتجهز بعناية، من مكونات مختارة بعناية، وبتفاصيل طهي دقيقة، وكل هذا في جو أنيق ومريح يناسب كل الأذواق. <br /> سواء جاي تجرب المنيو لأول مرة، أو من زبائننا المخلصين... نعدك إن &quot;نَهم&quot; دايمًا بيشبع ذوقك قبل جوعك.
          <br /> &quot;أطلق جوعك، ودع الباقي علينا.&quot;
        </p>
        <Image className='rounded-2xl' src='./Assets/Images/AboutUsImage.svg' height={250} width={500} alt='About Us Image' />
      </div>
    </section>
  );
};

export default AboutUs;
