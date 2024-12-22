import React from 'react';
import styles from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;