import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { User } from 'src/interfaces/auth';
import './TableUsers.scss';

interface TableUsersProps {
  users: User[];
}

export default function TableUsers({ users }: TableUsersProps) {
  return (
    <Table className='table-users-admin'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>Active</Table.HeaderCell>
          <Table.HeaderCell>Staff</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.first_name}</Table.Cell>
            <Table.Cell>{user.last_name}</Table.Cell>
            <Table.Cell className='status'>
              {
                <Icon
                  name={user.is_active ? 'check' : 'close'}
                  color={user.is_active ? 'green' : 'red'}
                />
              }
            </Table.Cell>
            <Table.Cell className='status'>
              {
                <Icon
                  name={user.is_staff ? 'check' : 'close'}
                  color={user.is_staff ? 'green' : 'red'}
                />
              }
            </Table.Cell>
            <Table.Cell textAlign='right'>
              <Button
                icon
                onClick={() => {
                  console.log('');
                }}
              >
                <Icon name='pencil' />
              </Button>
              <Button
                icon
                negative
                onClick={() => {
                  console.log('');
                }}
              >
                <Icon name='trash' />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
