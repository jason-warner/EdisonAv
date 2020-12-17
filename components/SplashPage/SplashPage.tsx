import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Video from '../Video/Video';
import React from 'react';


const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [videoReady, setVideoReady] = useState(null),
    [getVid, setdaVid] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    [charzarr, updateCharzarr] = useState([]),
    [, setButton] = useState(null),
    [iterate, setIterator] = useState(null),
    songRef = useRef(null),
    buttonRef = useRef(null),
    charRef = useRef(null);

  const unsplash = ` ${splash && styles.unSplash}`;
  const showThePage = ` ${videoReady && styles.showThePage}`;

  const splashButton = () => {
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    splashState(!splash);

    let iosDevice = null;
    const
      iosSong = songRef.current,
      iosAudio = new Audio(iosSong.src);
    setAudio(iosAudio);
    if ('webkitAudioContext' in window) {
      iosDevice = true
      setDevice(iosDevice);
      // return iosDevice && getVid ? iosAudio.play() : undefined;
      return context.resume() && setTimeout(() => iosAudio.play(), 100);
    }
  }

  const playVid = (Event: { target: any }) => {
    let button = null;
    const iosPlayVid = () => {
      button = buttonRef.current
      setButton(button);
      button.onclick = () => Event.target.playVideo();
    }
    return iosPlayVid();
  };

  const iterator = () => {
    alert('1 ITERATOR START');
    for (let i = 33; i < 126; i++) {
      alert('2 FOR LOOP START. i = ' + (i - 32));
      let char = String.fromCharCode(i).toString();
      console.log(charRef.current.childNodes.length);
      if (charRef.current.childNodes.length < 1 ) {
        alert('3 ADD A CHAR');
        updateCharzarr(arr => [...arr, char])
        alert(charRef.current.childNodes.length);
        setIterator(true);
        alert(charRef.current.childNodes.length);
      } else if (charRef.current.childNodes.length > 0) {
        alert('4 REMOVE A CHAR');
        charRef.current.removeChild(charRef.current.childNodes[0]);
        setIterator(!iterator);
      }
    }
    setTimeout(() => console.log(charRef.current.childNodes), 5000);
  }
  // useEffect(() => {
  //   window.onload = () => iterator();
  // });
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      return iterator();
    } else didMountRef.current = true
  });

return (
  <>
    <div className={styles.loaderPage + showThePage}>
      <div className={"wrapper " + styles.wrapper2}>
        <div className="simple_load_spinner"></div>
      </div>
    </div>

    <div className={styles.splashPage + unsplash}>
      <div ref={charRef} className={styles.charzarr}>
        {
          charzarr.map((char, zar) => {
            return (
              <h1 className={styles.title} key={zar}>
                {char}
              </h1>
            );
          })
        }
      </div>
      <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
      <div className={styles.icons}>
        <span>&#128266;</span>
        <span>&#127909;</span>
        <span>&#127850;</span>
      </div>
      <button
        ref={buttonRef}
        className={styles.splashButton}
        onClick={splashButton}
      >
        ENTER
          {/* {iosDevice && */}
        <audio preload="auto" className={styles.audio}>
          <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
        </audio>
        {/* } */}
      </button>
    </div>

    {
      splash &&
      <Navbar
        context={splashContext}
        audio={audio}
      />
    }

    <ErrorHandler>
      <main className={styles.vidContainer}>
        <Video
          setVideoReady={setVideoReady}
          setdaVid={setdaVid}
          playVid={playVid}
        />

      </main>
      {splash &&
        <AudioVisualizer
          iosDevice={iosDevice}
          getVid={getVid}
          splashContext={splashContext}
          splashAudio={audio}
        />
      }
    </ErrorHandler>
  </>
);
}

export default SplashPage;


// useEffect(() => {
//   const iosPlay = () => {
//     const
//       iosSong = songRef.current,
//       iosAudio = new Audio(iosSong.src);
//     return getVid && iosAudio.play();
//   }
// }, [getVid])







{/* <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                Play Video
            </button> */}
{/* <YouTube
            className={styles.format}
            videoId={"N31pvPzqJAY"}
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
          /> */}

  // const opts = {
  //   playerVars: {
  //     mute: 1 as 1,
  //     controls: 0 as 0,
  //     enablejsapi: 1 as 1,
  //     playsinline: 1 as 1
  //   }
  // };

  // const onReady = (Event: { target: any }) => {
  //   Event.target.playVideo()
  //   setTimeout(() => Event.target.pauseVideo(), 100);
  //   setVideoReady(true);
  //   playVid(Event);

  // }


  // const onPlay = () => {
  //   // setVideoReady(true);
  //   setdaVid(true);
  // }