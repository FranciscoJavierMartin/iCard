import React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
import './Header.scss';

interface HeaderProps {
  title: string;
  btnTitle?: string;
  btnClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => void;
  btnTitleSecond?: string;
  btnClickSecond?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => void;
}

export default function Header({
  title,
  btnTitle,
  btnClick,
  btnTitleSecond,
  btnClickSecond,
}: HeaderProps) {
  return (
    <div className='header-admin'>
      <h2>{title}</h2>
      <div>
        {btnTitle && btnClick && (
          <Button positive onClick={btnClick} content={btnTitle} />
        )}
        {btnTitleSecond && btnClickSecond && (
          <Button negative onClick={btnClickSecond} content={btnTitleSecond} />
        )}
      </div>
    </div>
  );
}
