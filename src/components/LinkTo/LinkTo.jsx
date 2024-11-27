import React from 'react';
import styles from './styles.module.scss';

const LinkTo = ({ text, style }) => {
  // Declare scssLink
  const scssLink =
    style === 'light'
      ? `${styles.link} ${styles.disabled}`
      : styles.link;

  return (
    <a href="#" className={scssLink}>
      {text}
    </a>
  );
};

export default LinkTo;
