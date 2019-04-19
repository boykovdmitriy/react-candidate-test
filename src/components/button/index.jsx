import * as React from 'react';
import cx from 'classnames';
import style from './button.css';

export const Button = ({
                         className,
                         onClick,
                         children,
                         type = 'button',
                         component: Component = 'button',
                         ...restProps
                       }) => (
  <Component
    type={type}
    className={cx(style.container, className)}
    onClick={onClick}
    {...restProps}
  >
    {children}
  </Component>
);
