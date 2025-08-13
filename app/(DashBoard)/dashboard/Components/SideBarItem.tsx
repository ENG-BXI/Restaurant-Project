'use client';
import {ArrowUp} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {ReactNode} from 'react';

function SideBarItem({text, icon, hasArrow = false, path, open}: {text: string; icon: ReactNode; hasArrow?: boolean; path: string; open: boolean}) {
  const p = usePathname();
  const activeLink = p.split('/')[2];
  console.log(activeLink);

  return (
    <Link href={'/dashboard/' + path} className={`side-bar-item cursor-pointer text-second-Normal w-full h-8 rounded-lg px-2 py-1 bg-primary-Normal-Toggle flex gap-x-2 hover:bg-primary-Normal-hover mb-3 ${(activeLink == path || (path === '/' && !activeLink)) && 'border border-second-Normal'} `}>
      {icon}
      <span className={`grow hidden md:block ${open ? 'block!' : 'hidden!'}`}>{text}</span>
      {/* change this Icon Arrow */}
      {hasArrow && <ArrowUp className={`grow hidden md:block ${open ? 'block!' : 'hidden!'}`} />}
    </Link>
  );
}

export default SideBarItem;
