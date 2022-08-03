import Head from 'next/head';
import { useEffect } from 'react';

import DevProfile from '../components/DevProfile';
import Header from '../components/Header';
import Search from '../components/Search';

import type { NextPage } from 'next';

import styles from './index.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    // TODO: function 분리하기
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage['df-theme'] === 'dark' ||
      (!('df-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>devfinder</title>
        <meta name="description" content="Find developer in GitHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Search />
        <DevProfile />
      </main>

      <footer className={styles.footer}>copyright</footer>
    </div>
  );
};

export default Home;
