import React from 'react';
import {Button} from '../../../components/button';
import styles from './nowButton.css';

export const NowButton = (props) => (
  <Button className={styles.container} {...props}>
    NOW
  </Button>
);
