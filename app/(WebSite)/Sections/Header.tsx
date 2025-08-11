import Logo from '@/app/Components/Logo';
import {MenuIcon} from 'lucide-react';

const Header = () => {
  return (
    <header className='flex justify-between items-center h-15 px-8 w-full '>
      <Logo />
      <MenuIcon />
    </header>
  );
};

export default Header;
