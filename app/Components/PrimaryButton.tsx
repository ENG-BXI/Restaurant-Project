import { ReactNode } from 'react';
import {Button} from './ShadCn/button';

const PrimaryButton = ({children , type='submit',onClick}: {children: ReactNode,type?:'button'|'submit',onClick?:()=>void}) => {
  return <Button onClick={onClick} type={type} className='rounded-4xl cursor-pointer text-second-Normal px-5 bg-linear-to-r from-[#060606] to-[#1E1E1E] border border-transparent duration-500 hover:border-second-Normal '>{children}</Button>;
};

export default PrimaryButton;
