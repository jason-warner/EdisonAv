import Head from 'next/head';
import SplashPage from '../components/SplashPage/SplashPage';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Edison Av</title>
        <link rel="icon" href="/ediHome.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      
      <SplashPage />
      
    </>
  )
}
