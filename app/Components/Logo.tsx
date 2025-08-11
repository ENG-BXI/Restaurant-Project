import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex items-center gap-x-2 font-bold text-xl'>
      <Image src='./Assets/Images/logo.svg' height={30} width={30} alt='logo image' /> نهم
    </div>
  );
};

export default Logo;
