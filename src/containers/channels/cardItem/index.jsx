import React from 'react';
import styles from './cardItem.css';

export const CardItem = ({children}) => (
  <section className={styles.container}>
    {children}
  </section>
);
