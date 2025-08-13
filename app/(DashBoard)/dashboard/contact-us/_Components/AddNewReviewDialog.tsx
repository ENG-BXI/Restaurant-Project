'use client';
import PrimaryButton from '@/app/Components/PrimaryButton';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/app/Components/ShadCn/dialog';
import {Input} from '@/app/Components/ShadCn/input';
import {Label} from '@/app/Components/ShadCn/label';
import {Textarea} from '@/app/Components/ShadCn/textarea';
import {useState} from 'react';

const AddNewReviewDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={val => setOpen(val)}>
      <DialogTrigger asChild>
        <PrimaryButton>اضافة صنف جديد</PrimaryButton>
      </DialogTrigger>
      <DialogContent className='bg-second-Normal border-0 text-primary-Normal'>
        <DialogHeader>
          <DialogTitle className='text-center'>اضافة رأي جديد</DialogTitle>
        </DialogHeader>
        <form action='' className='flex flex-col items-center overflow-hidden'>
          <div className='flex gap-x-3 w-full item-center mb-5 '>
            <div className='w-1/2'>
              <Label className='text-primary-Normal! text-lg! mb-2!'>عدد النجوم</Label>
              <Input className='bg-primary-Normal! focus:border-primary-Normal-hover! text-second-Normal!' />
            </div>
            <div className='w-1/2'>
              <Label className='text-primary-Normal! text-lg! mb-2!'>اسم الشخص</Label>
              <Input className='bg-primary-Normal! focus:border-primary-Normal-hover! text-second-Normal!' />
            </div>
          </div>
          <div className='w-full'>
            <Label className='text-primary-Normal! text-lg! mb-2!'>التفاصيل</Label>
            <Textarea className='bg-primary-Normal! text-second-Normal! min-h-20! max-h-50' />
          </div>
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

export default AddNewReviewDialog;
