import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import {TitleIterator} from '../TitleIterator/TitleIterator';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import { useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Video from '../Video/Video';
// import React from 'react';


const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [videoReady, setVideoReady] = useState(null),
    [getVid, setdaVid] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    [, setButton] = useState(null),
    songRef = useRef(null),
    buttonRef = useRef(null);

  const
    unsplash = ` ${splash && styles.unSplash}`,
    showThePage = ` ${videoReady && styles.showThePage}`;

  const splashButton = () => {
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    splashState(!splash);
    let iosDevice: boolean = null;
    const
      iosSong = songRef.current,
      iosAudio = new Audio(iosSong.src);
    setAudio(iosAudio);
    if ('webkitAudioContext' in window) {
      iosDevice = true;
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


  return (
    <>
      <div className={styles.splashPage + unsplash}>
        <TitleIterator />
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <div className={styles.icons}>
          <span>&#128266;</span>
          <span>&#127909;</span>
          <span>&#127850;</span>
        </div>
        {!videoReady ?
          <div className={styles.loaderPage + showThePage}>
            <div className={"wrapper " + styles.wrapper2}>
              <div className="simple_load_spinner"></div>
            </div>
          </div>
          :
          <button
            ref={buttonRef}
            className={styles.splashButton}
            onClick={splashButton}
          > ENTER
            <audio preload="auto" className={styles.audio}>
              <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
            </audio>
          </button>
        }
      </div>
      {splash &&
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

  // const iterator = () => {
  //   console.log('1 ITERATOR START');
  //   let iterate = false;
  //   // for (let i = 33; i < 126; i++) {
  //     console.log('2 FOR LOOP START. i = ' + (i - 32));
  //     let char = String.fromCharCode(i).toString();
  //     let charRef.current.childNodes = charRef.current.childNodes.length
  //     if (charRef.current.childNodes < 1) {
  //       iterate = false;
  //       setCharzarr(arr => [...arr, char])
  //       console.log('3 ADD A CHAR // arr: ' + charRef.current.childNodes);
  //     }
  //     else if (charRef.current.childNodes > 0) {
  //       charRef.current.removeChild(charRef.current.childNodes[0]);
  //       console.log('4 REMOVE A CHAR // arr: ' + charRef.current.childNodes);
  //     }
  //   // }
  // }




