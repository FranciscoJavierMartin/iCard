import React, { useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { Header, TableCategoryAdmin } from 'src/components/admin';
import { useCategory } from 'src/hooks';

export default function CategoriesAdmin() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Header
        title='Categories'
        btnTitle='New category'
        btnClick={() => console.log('hello')}
      />
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TableCategoryAdmin categories={categories} />
      )}
    </>
  );
}
