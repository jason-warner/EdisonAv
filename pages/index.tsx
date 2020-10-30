import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SplashPage from '../components/SplashPage/SplashPage';
// import { useState } from 'react';
import React from 'react';

export default function Home() {
  // const [play, playState] = useState(false);
  return (
    <>
      <Head>
        <title>Edison Av</title>
        <link rel="icon" href="/ediHome.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Navbar />
      
      <SplashPage />
      
      {/* {console.log(play)} */}
    </>
  )
}

// import homeStyles from '../styles/pages/home.module.css';

// import YouTube from 'react-youtube';


  // const vidRef = useRef(null);
  // const indexVid = vidRef.current;
  // const addAutoPlay = () => {
  //   indexVid.src += "&amp;autoplay=1";
  // }
  // const opts = {
  //   height: '100%',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1 as 1,
  //     mute: 1 as 1,
  //     controls: 0 as 0,
  //   }
  // };
  // const onReady=(Event: { target: any }) => {
  //   // access to player in all event handlers via event.target
  //   Event.target.pauseVideo();
  //   console.log(Event.target.pauseVideo());
  //   setTimeout(() => Event.target.playVideo(), 100);
  // }
  // console.log(indexVid.src);






// <main className={homeStyles.mainVid}>
// <div className={homeStyles.vidContainer}>
//  {/* {play && addAutoPlay()} */}
//  {play &&
//    <YouTube className={homeStyles.format}
//      videoId={"N31pvPzqJAY"}
//      opts={opts}
//      onReady={onReady}
//    />
//  }
//  {console.log(play)}
//</div>
//</main>


{/* <iframe ref={vidRef} src="https://www.youtube-nocookie.com/embed/N31pvPzqJAY?showinfo=0&amp;vq=hd1080&amp;mute=1&amp;loop=1&amp;color=%23000000&amp;modestbranding=1&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=31&amp;" width="100%" height="100%" frameBorder="0"></iframe> */ }

// import Head from 'next/head';
// import Navbar from '../components/Navbar/Navbar';
// import homeStyles from '../styles/pages/home.module.css';
// import SplashPage from '../components/SplashPage/SplashPage';
// import {useState, useRef, useEffect } from 'react';
// import Youtube from 'react-youtube';



// export default function Home() {
//   const [play, playState] = useState(false);
//   const size = useWindowSize();
//   const opts = {
//     height: size.height,
//     width: size.width,
//     playerVars: {
//       autoPlay: 1
//     }
//   };
//   return (
//     <div>
//       <SplashPage playVid={splashClick => playState(splashClick)}  />
//       <Head>
//         <title>Edison Av</title>
//         <link rel="icon" href="/ediHome.png" />
//       </Head>
//       <Navbar />
//       <section>
//         <header>
//         </header>
//         <main className={homeStyles.mainVid}>
//           <div className={homeStyles.vidContainer}>
//            <Youtube videoId='N31pvPzqJAY' opts={opts} onReady={this._onReady}/>
//           </div>
//         </main>
//       </section>
//     </div>
//   )
// }



// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     // Handler to call on window resize
//     // function handleResize() {
//       // Set window width/height to state
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//     // }
//     // Add event listener
//     // window.addEventListener("resize", handleResize);
//     // Call handler right away so state gets updated with initial window size
//       // handleResize();
//     // Remove event listener on cleanup
//     // return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }