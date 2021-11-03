import React, { ReactElement, ReactNode } from 'react';
import './AdminLayout.scss';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps): ReactElement {
  return (
    <div>
      <p>Admin layout</p>
      {children}
    </div>
  );
}
