import React from 'react';
import styles from './bottomPanel.css';

export const BottomPanel = ({children}) => (
  <section className={styles.container}>
    {children}
  </section>
);
