'use client';
import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Link from 'next/link';

const PaginationComponent = ({page, totalPages}: {page: number, totalPages: number}) => {
  return (
    <Pagination count={totalPages} style={{marginTop: '1rem'}} variant="outlined" color="secondary" page={page} shape='rounded' renderItem={(item) => (
      <PaginationItem
        component={Link}
        href={`./?page=${item.page}`}
        {...item}
      />
    )}/>
  )
}

export default PaginationComponent