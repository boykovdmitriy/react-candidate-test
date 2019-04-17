import * as React from 'react';
import style from './button.css';

export const Button = ({
                  onClick,
                  children,
                  type = 'button',
                  component: Component = 'button',
                  ...restProps
                }) => (
  <Component
    type={type}
    className={style.container}
    onClick={onClick}
    {...restProps}
  >
    {children}
  </Component>
);
