import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/app/Components/ShadCn/table';
import {Edit, Trash2} from 'lucide-react';
import AddNewReviewDialog from './_Components/AddNewReviewDialog';

const page = () => {
  return (
    <section>
      <div className='flex flex-col gap-3 md:flex-row justify-between md:items-center w-full mb-10'>
        <h2 className='text-M-h2 text-second-Normal font-bold'>ادارة اراء العملاء</h2>
        <AddNewReviewDialog />
      </div>
      <Table className='dark text-second-Normal text-lg bg-black rounded-2xl'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-start text-second-Normal'>عدد النجوم</TableHead>
            <TableHead className='text-start text-second-Normal'>النص</TableHead>
            <TableHead className='text-start text-second-Normal'>اسم الشخص</TableHead>
            <TableHead className='text-start text-second-Normal'>حدف / تعديل</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className='text-start text-second-Normal'>5</TableCell>
            <TableCell className='text-start text-second-Normal'>الخدمة ممتازة جدًا</TableCell>
            <TableCell className='text-start text-second-Normal'>أحمد علي</TableCell>
            <TableCell className='flex items-center gap-x-2'>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Edit />
              </div>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Trash2 />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-start text-second-Normal'>4</TableCell>
            <TableCell className='text-start text-second-Normal'>جيد جدًا لكن فيه ملاحظات بسيطة</TableCell>
            <TableCell className='text-start text-second-Normal'>منى سالم</TableCell>
            <TableCell className='flex items-center gap-x-2'>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Edit />
              </div>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Trash2 />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-start text-second-Normal'>3</TableCell>
            <TableCell className='text-start text-second-Normal'>الخدمة مقبولة لكن تحتاج تطوير</TableCell>
            <TableCell className='text-start text-second-Normal'>عبدالله يحيى</TableCell>
            <TableCell className='flex items-center gap-x-2'>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Edit />
              </div>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Trash2 />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-start text-second-Normal'>2</TableCell>
            <TableCell className='text-start text-second-Normal'>ما كانت بالشكل المطلوب</TableCell>
            <TableCell className='text-start text-second-Normal'>سارة حسن</TableCell>
            <TableCell className='flex items-center gap-x-2'>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Edit />
              </div>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Trash2 />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-start text-second-Normal'>1</TableCell>
            <TableCell className='text-start text-second-Normal'>تجربة سيئة للأسف</TableCell>
            <TableCell className='text-start text-second-Normal'>محمد فؤاد</TableCell>
            <TableCell className='flex items-center gap-x-2'>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Edit />
              </div>
              <div className='cursor-pointer p-1 bg-second-Normal rounded-md text-primary-Normal'>
                <Trash2 />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default page;
