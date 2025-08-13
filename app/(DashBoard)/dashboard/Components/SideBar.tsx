'use client';
import Logo from '@/app/Components/Logo';
import {Layers3, LayoutDashboard, Menu, ShoppingCart, User} from 'lucide-react';
import SideBarItem from './SideBarItem';
import {useState} from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className={`absolute z-50 top-0 right-0 bottom-0 duration-300 ${open ? 'min-w-[270px]! items-end' : 'min-w-20! max-w-20!'} md:relative md:flex min-w-[270px] max-w-[270px] bg-primary-Normal flex-col min-h-screen items-center pt-10 px-5 pb-3`}>
      <Menu onClick={() => setOpen(val => !val)} className={`justify-self-center md:justify-self-end cursor-pointer ${open ? 'justify-self-end!' : 'justify-self-center'}`} />
      <Logo className={`mt-3 md:mt-0 flex-col md:flex-row md:h-[70px]! text-[0px] md:text-3xl! mb-3 md:mb-10 ${open ? 'flex-row! mx-auto h-[70px]! w-[120px] text-3xl! mb-10 mt-0!' : 'text-[0px]! md:text-[0px]! flex-col md:flex-col! md:mb-3! md:mt-3 md:max-h-[40px]!'}`} />
      <SideBarItem text='إدارة الصفحات' open={open} icon={<LayoutDashboard />} hasArrow path='/' />
      <SideBarItem text='إدارة الأصناف' open={open} icon={<Layers3 />} path='categories' />
      <SideBarItem text='إدارة المنتجات' open={open} icon={<ShoppingCart />} path='products' />
      <SideBarItem text='إدارة اراء العملاء' open={open} icon={<User />} path='contact-us' />
    </aside>
  );
};

export default SideBar;
