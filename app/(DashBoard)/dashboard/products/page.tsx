import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/app/Components/ShadCn/table';
import {Edit, Trash2} from 'lucide-react';
import PrimaryButton from '@/app/Components/PrimaryButton';
import CustomButton from '@/app/Components/CustomButton';
import {Input} from '@/app/Components/ShadCn/input';
import {Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from '@/app/Components/ShadCn/pagination';
import Link from 'next/link';

const page = () => {
  return (
    <section>
      <div className='flex flex-col gap-3 md:flex-row justify-between md:items-center w-full mb-10'>
        <h2 className='text-M-h2 text-second-Normal font-bold'>ادارة المنتجات</h2>
        <Link href='products/add-product'>
          <PrimaryButton>اضافة منتج جديد</PrimaryButton>
        </Link>
      </div>

      <div className='flex flex-col gap-3 md:flex-row justify-between md:items-center mb-5'>
        <span className='text-M-h3 font-bold text-second-Normal mb-0!'>بحث</span>
        <Input />
        <PrimaryButton>بحث</PrimaryButton>
      </div>
      <div className='flex gap-x-3 overflow-auto mb-3'>
        <CustomButton text='الكل' isActive />
        <CustomButton text='المشاوي النارية' />
        <CustomButton text='أطباق الدجاج' />
        <CustomButton text='الأرز والمقبلات الساخنة' />
        <CustomButton text='السلطات والمقبلات الباردة' />
      </div>

      <Table className='dark text-second-Normal text-lg bg-black rounded-2xl'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-start text-second-Normal'>اسم المنتج</TableHead>
            <TableHead className='text-start text-second-Normal'>صورة المنتج</TableHead>
            <TableHead className='text-start text-second-Normal'>تفاصيل المنتج</TableHead>
            <TableHead className='text-start text-second-Normal'>الصنف</TableHead>
            <TableHead className='text-start text-second-Normal'>السعر</TableHead>
            <TableHead className='text-start text-second-Normal'>حدف / تعديل</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>المشاوي الملكية</TableCell>
            <TableCell>4</TableCell>
            <TableCell>بدون سلطة</TableCell>
            <TableCell>المشاوي الملكية</TableCell>
            <TableCell>75 ر.س</TableCell>
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
            <TableCell>بيتزا مارجريتا</TableCell>
            <TableCell>2</TableCell>
            <TableCell>إضافة جبنة</TableCell>
            <TableCell>بيتزا مارجريتا</TableCell>
            <TableCell>45 ر.س</TableCell>
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
            <TableCell>برجر دبل لحم</TableCell>
            <TableCell>1</TableCell>
            <TableCell>إضافة بطاطس</TableCell>
            <TableCell>برجر دبل لحم</TableCell>
            <TableCell>55 ر.س</TableCell>
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
      <div className='mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default page;
