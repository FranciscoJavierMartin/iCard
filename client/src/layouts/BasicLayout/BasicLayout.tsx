import React, { ReactElement, ReactNode } from 'react';

interface BasicLayoutProps {
  children: ReactElement;
}

export default function BasicLayout({
  children,
}: BasicLayoutProps): ReactElement {
  return children;
}
