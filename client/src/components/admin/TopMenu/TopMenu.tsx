import React, { useContext } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { AuthContext } from 'src/contexts';
import './TopMenu.scss';

export default function TopMenu() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <Menu fixed='top' className='top-menu-admin'>
      <Menu.Item className='top-menu-admin__logo'>
        <p>iCard Admin</p>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>Hello, {auth?.me.username || auth?.me.email}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name='sign out' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
