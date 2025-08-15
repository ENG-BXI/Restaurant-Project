import {Variants} from 'motion';
import {ReactNode} from 'react';
import * as motion from 'motion/react-client';

function CustomCard({children, className}: {children: ReactNode; className?: string}) {
  const child: Variants = {
    start: {
      x: '20%',
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1
    }
  };
  return (
    <motion.div variants={child} viewport={{once: true}} className={`bg-second-Normal rounded-3xl text-black w-70 p-4 duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </motion.div>
  );
}

export default CustomCard;
