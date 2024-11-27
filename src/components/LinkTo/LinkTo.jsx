import React from 'react';
import styles from './styles.module.scss';

const LinkTo = ({ text, style, icon }) => {
  // Declare scssLink
  const scssLink =
    style === 'light'
      ? `${styles.link} ${styles.disabled}`
      : styles.link;

  return (
    <a href="#" className={scssLink}>
      {icon && <img src={icon} alt="" />}
      {text}
    </a>
  );
};

export default LinkTo;
