import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import homeStyles from '../styles/pages/home.module.css';
import SplashPage from '../components/SplashPage/SplashPage';
import {useState, useRef } from 'react';

export default function Home() {
  const [play, playState] = useState(false);
  const vidRef = useRef(null);
  const indexVid = vidRef.current;
  const addAutoPlay = () => {
    indexVid.src += "&amp;autoplay=1";
  }
  // console.log(indexVid.src);
  return (
    <div>
      <SplashPage playVid={splashClick => playState(splashClick)}  />
      <Head>
        <title>Edison Av</title>
        <link rel="icon" href="/ediHome.png" />
      </Head>
      <Navbar />
      <section>
        <header>
        </header>
        <main className={homeStyles.mainVid}>
          <div className={homeStyles.vidContainer}>
            {play && addAutoPlay()}
            <iframe ref={vidRef} src="https://www.youtube-nocookie.com/embed/N31pvPzqJAY?showinfo=0&amp;vq=hd1080&amp;mute=1&amp;loop=1&amp;color=%23000000&amp;modestbranding=1&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=31&amp;" width="100%" height="100%" frameBorder="0"></iframe>
          </div>
        </main>
      </section>
    </div>
  )
}
