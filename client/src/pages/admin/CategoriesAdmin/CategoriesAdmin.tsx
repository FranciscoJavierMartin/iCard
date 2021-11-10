import React from 'react';
import { Header } from 'src/components/admin';

export default function CategoriesAdmin() {
  return (
    <>
      <Header
        title='Categories'
        btnTitle='New category'
        btnClick={() => console.log('hello')}
      />
    </>
  );
}
