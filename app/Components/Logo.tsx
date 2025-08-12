import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex cursor-pointer items-center gap-x-2 font-bold text-xl'>
      <Image src='./../Assets/Images/logo.svg' height={30} width={30} alt='logo image' /> نهم
    </Link>
  );
};

export default Logo;
