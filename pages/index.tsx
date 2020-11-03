import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SplashPage from '../components/SplashPage/SplashPage';
// import { useState } from 'react';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Edison Av</title>
        <link rel="icon" href="/ediHome.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Navbar />
      
      <SplashPage />
      
    </>
  )
}
