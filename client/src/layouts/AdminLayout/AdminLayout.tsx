import React, { ReactElement, ReactNode } from 'react';
import { LoginAdmin } from 'src/pages/admin';
import './AdminLayout.scss';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps): ReactElement {
  const auth: any = null;

  return auth ? (
    <div>
      <p>Admin layout</p>
      {children}
    </div>
  ) : (
    <LoginAdmin />
  );
}
