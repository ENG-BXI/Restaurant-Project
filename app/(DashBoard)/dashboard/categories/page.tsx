import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/app/Components/ShadCn/table';
import {Edit, Trash2} from 'lucide-react';
import AddNewCategoryDialog from './Components/AddNewCategoryDialog';

const page = () => {
  return (
    <section>
      <div className='flex flex-col gap-3 md:flex-row justify-between md:items-center w-full mb-10'>
        <h2 className='text-M-h2 text-second-Normal font-bold'>ادارة الاقسام</h2>
        <AddNewCategoryDialog />
      </div>

      <Table className='dark text-second-Normal text-lg bg-black rounded-2xl'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-start text-second-Normal'>اسم القسم</TableHead>
            <TableHead className='text-start text-second-Normal'>حدف / تعديل</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>المشاوي الملكية</TableCell>
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
            <TableCell>البرجر الفاخر</TableCell>
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
            <TableCell>البيتزا الإيطالية</TableCell>
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
            <TableCell>المقبلات الشرقية</TableCell>
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
            <TableCell>الحلويات العربية</TableCell>
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
            <TableCell>المشروبات الباردة</TableCell>
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
