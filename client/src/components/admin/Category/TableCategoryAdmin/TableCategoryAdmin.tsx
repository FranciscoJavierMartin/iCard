import React from 'react';
import { Table, Image, Button, Icon } from 'semantic-ui-react';
import { Category } from 'src/interfaces/category';
import './TableCategoryAdmin.scss';

interface TableCategoryAdminProps {
  categories: Category[];
}

export default function TableCategoryAdmin({
  categories,
}: TableCategoryAdminProps) {
  return (
    <Table className='table-category-admin'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {categories.map((category: Category) => (
          <Table.Row key={category.id}>
            <Table.Cell width={2}>
              <Image src={category.image} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
