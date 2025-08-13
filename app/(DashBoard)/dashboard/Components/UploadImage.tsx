'use client';
import {Camera} from 'lucide-react';
import {useRef} from 'react';

function UploadImage() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => {
        ref.current?.click();
      }}
      className='cursor-pointer bg-second-Normal rounded-3xl w-[calc(100%-5rem)] mx-auto h-80 flex flex-col gap-y-3 justify-center items-center'
    >
      <div className='bg-primary-Normal w-20 h-20 rounded-full flex justify-center items-center'>
        <Camera className='w-10 h-10 fill-second-Normal text-primary-Normal ' />
      </div>
      <span className='text-M-h2 font-semibold text-primary-Normal'>اضافة صورة</span>
      <input type='file' className='hidden' ref={ref} />
    </div>
  );
}

export default UploadImage;
