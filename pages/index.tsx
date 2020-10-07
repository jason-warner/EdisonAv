import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import homeStyles from '../styles/pages/home.module.css';
import dynamic from 'next/dynamic';
import {useState } from 'react';

export default function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/AudioVisualizer/AudioVisualizer'),
    { ssr: false }  
  );
  const [buttonClicked, buttonIs] = useState(false);
  const audioVisualizer = <DynamicComponentWithNoSSR />
  return (
    <div>
      <Head>
        <title>Edison Av</title>
        <link rel="icon" href="/ediHome.png" />
      </Head>
      <Navbar />
      <section>
        <header>
          {/* <h1 className={homeStyles.logo}>Edison Av</h1> */}
        </header>
        <main className={homeStyles.mainVid}>
          <div className={homeStyles.vidContainer}>
            <iframe id="homeVid" src="https://www.youtube-nocookie.com/embed/N31pvPzqJAY?showinfo=0&amp;vq=hd1080&amp;autoplay=1&amp;mute=0&amp;loop=1&amp;color=%23000000&amp;modestbranding=1&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3" width="100%" height="100%" frameBorder="0"></iframe>
          </div>
            <button onClick={()=> buttonIs(!buttonClicked)}>
                Play
            </button>
            { buttonClicked && audioVisualizer }
        </main>
        <footer>
          {/* Made by Jason W. */}
        </footer>
      </section>
    </div>
  )
}
