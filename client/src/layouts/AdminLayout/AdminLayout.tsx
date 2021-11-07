import React, { ReactElement, ReactNode, useContext } from 'react';
import { TopMenu, SideMenu } from 'src/components/admin';
import { AuthContext } from 'src/contexts';
import { LoginAdmin } from 'src/pages/admin';
import './AdminLayout.scss';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps): ReactElement {
  const { auth } = useContext(AuthContext);

  return auth ? (
    <div className='admin-layout'>
      <div className='admin-layout__menu'>
        <TopMenu />
      </div>
      <div className='admin-layout__main-content'>
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  ) : (
    <LoginAdmin />
  );
}
