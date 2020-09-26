import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import homeStyles from '../styles/pages/home.module.css';

export default function Home() {
  // const homeVid = document.getElementsByTagName('iframe')[0]
  // if (homeVid && homeVid.contentWindow) {
  //   homeVid.contentWindow.postMessage((event.target as HTMLTextAreaElement).value, '*');
  // }
  // window.addEventListener('message', function(event) {
  //   if (event.origin === window.location.origin) {
  //     document.text(event.data);
  //   }
  // }, false);
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
            <iframe id="homeVid" src="https://www.youtube-nocookie.com/embed/N31pvPzqJAY?vq=hd1080&autoplay=1&mute=0&loop=1color=%23000000&modestbranding=1&controls=0&origin=https%3A%2F%2Fedison-av.complaysinline=1&showinfo=0&rel=0&iv_load_policy=3" width="100%" height="100%" frameBorder="0"></iframe>
          </div>
        </main>
        <footer>
          {/* Made by Jason W. */}
        </footer>
      </section>
    </div>
  )
}
