'use client';
import PrimaryButton from '@/app/Components/PrimaryButton';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/app/Components/ShadCn/dialog';
import {Input} from '@/app/Components/ShadCn/input';
import {useState} from 'react';

const AddNewCategoryDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={val => setOpen(val)}>
      <DialogTrigger asChild>
        <PrimaryButton>اضافة صنف جديد</PrimaryButton>
      </DialogTrigger>
      <DialogContent className='bg-second-Normal border-0 text-primary-Normal'>
        <DialogHeader>
          <DialogTitle className='text-center'>اضافة صنف جديد</DialogTitle>
        </DialogHeader>
        <form action='' className='flex flex-col items-center'>
          <Input className='bg-primary-Normal! focus:border-primary-Normal-hover! text-second-Normal!' />
          <div className='mt-3  flex gap-x-2'>
            <PrimaryButton>اضافة</PrimaryButton>
            <PrimaryButton
              type='button'
              onClick={() => {
                setOpen(false);
              }}
            >
              الغاء
            </PrimaryButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCategoryDialog;
