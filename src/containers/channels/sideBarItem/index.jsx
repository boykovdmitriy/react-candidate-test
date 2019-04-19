import React from 'react';
import styles from './sideBarItem.css';

export const SideBarItem = ({children}) => (
  <section className={styles.container}>
    {children}
  </section>
);
