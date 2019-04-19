import React from 'react';
import cx from 'classnames';

export const Footer = ({children, className}) => (
  <footer className={cx(className)}>
    {children}
  </footer>
);
