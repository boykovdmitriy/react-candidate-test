import React from 'react';
import cx from 'classnames';
import styles from './header.css';

export const Header = ({className, children}) => (
  <header className={cx(styles.container, className)}>
    {children}
  </header>
);
