import React, { ReactElement, ReactNode } from 'react';
import './ClientLayout.scss';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({
  children,
}: ClientLayoutProps): ReactElement {
  return (
    <div>
      <p>Client layout</p>
      {children}
    </div>
  );
}
