import {ReactNode} from 'react';

function CustomCard({children, className}: {children: ReactNode; className?: string}) {
  return <div className={`bg-second-Normal rounded-3xl text-black w-70 p-4 duration-300 hover:-translate-y-1 ${className}`}>{children}</div>;
}

export default CustomCard;
