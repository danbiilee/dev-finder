import React from 'react';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>devfinder</h1>
      <button type="button">LIGHT 🌟</button>
    </header>
  );
}
