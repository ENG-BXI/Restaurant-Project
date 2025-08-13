import Image from 'next/image';
import Link from 'next/link';

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href='/' className={`flex cursor-pointer items-center gap-x-2 font-bold text-xl h-[35px] ${className}`}>
      <Image className='h-full w-1/2' src='./../Assets/Images/logo.svg' height={35} width={35} alt='logo image' /> نهم
    </Link>
  );
};

export default Logo;
