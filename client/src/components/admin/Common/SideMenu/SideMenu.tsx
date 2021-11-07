import React, { ReactNode, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import {
  CATEGORIES_ADMIN_PAGE_ROUTE,
  HOME_ADMIN_PAGE_ROUTE,
  PAYMENTS_HISTORY_ADMIN_PAGE_ROUTE,
  PRODUCTS_ADMIN_PAGE_ROUTE,
  TABLES_ADMIN_PAGE_ROUTE,
  USERS_ADMIN_PAGE_ROUTE,
} from 'src/constants/routes';
import { AuthContext } from 'src/contexts';
import './SideMenu.scss';

interface SideMenuProps {
  children: ReactNode;
}

export default function SideMenu({ children }: SideMenuProps) {
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();

  return (
    <div className='side-menu-admin'>
      <Menu fixed='left' borderless className='side' vertical>
        <Menu.Item
          as={Link}
          to={HOME_ADMIN_PAGE_ROUTE}
          active={pathname === HOME_ADMIN_PAGE_ROUTE}
        >
          <Icon name='home' /> Orders
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={TABLES_ADMIN_PAGE_ROUTE}
          active={pathname === TABLES_ADMIN_PAGE_ROUTE}
        >
          <Icon name='table' /> Tables
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={PAYMENTS_HISTORY_ADMIN_PAGE_ROUTE}
          active={pathname === PAYMENTS_HISTORY_ADMIN_PAGE_ROUTE}
        >
          <Icon name='history' /> Payments history
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={CATEGORIES_ADMIN_PAGE_ROUTE}
          active={pathname === CATEGORIES_ADMIN_PAGE_ROUTE}
        >
          <Icon name='folder' /> Categories
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={PRODUCTS_ADMIN_PAGE_ROUTE}
          active={pathname === PRODUCTS_ADMIN_PAGE_ROUTE}
        >
          <Icon name='cart' /> Products
        </Menu.Item>
        {auth?.me.is_staff && (
          <Menu.Item
            as={Link}
            to={USERS_ADMIN_PAGE_ROUTE}
            active={pathname === USERS_ADMIN_PAGE_ROUTE}
          >
            <Icon name='users' /> Users
          </Menu.Item>
        )}
      </Menu>
      <div className='content'>{children}</div>
    </div>
  );
}
