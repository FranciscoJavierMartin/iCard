import React, { ReactElement, ReactNode, useContext } from 'react';
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
    <div>
      <p>Admin layout</p>
      {children}
    </div>
  ) : (
    <LoginAdmin />
  );
}
