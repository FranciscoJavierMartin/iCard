import React, { ReactElement } from 'react';
import { LoginForm } from 'src/components/admin';
import './LoginAdmin.scss';

export default function LoginAdmin(): ReactElement {
  return (
    <div className='login-admin'>
      <div className='login-admin__content'>
        <h1>Access to panel</h1>
        <LoginForm />
      </div>
    </div>
  );
}
