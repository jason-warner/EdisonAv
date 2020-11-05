import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import { useState, useRef } from 'react';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import React from 'react';
// import Video from '../Video/Video';
import YouTube from 'react-youtube';

const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [videoReady, setVideoReady] = useState(null),
    [getVid, setdaVid] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    [button, setButton] = useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null),
    buttonRef = useRef(null);
  const opts = {
    playerVars: {
      mute: 1 as 1,
      controls: 0 as 0,
      enablejsapi: 1 as 1,
      playsinline: 1 as 1
    }
  };
  
  const onReady = (Event: { target: any }) => {
    // access to player in all event handlers via event.target
    setVideoReady(true);
    // splash && Event.target.playVideo()
    // setTimeout(() => Event.target.playVideo(), 5000);
    playVid(Event);

  }

  const playVid = (Event: { target: any }) => {
    let button = null;
    const iosPlayVid = () => {
      button = buttonRef.current
      setButton(button);
      button.onclick = () => Event.target.playVideo();
    }
   return iosPlayVid()
  };
  const onPlay = () => {
    // setVideoReady(true);
    setdaVid(true);
  }
  const splashButton = () => {
    splashState(!splash);
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    let iosDevice = null;
    if ('webkitAudioContext' in window) {
      iosDevice = true
      setDevice(iosDevice);
      const
        iosSong = songRef.current,
        iosAudio = new Audio(iosSong.src);
      setAudio(iosAudio);
      // !iosDevice && videoReady ? audio.play() : undefined;
      return getVid ? context.resume() && audio.play() : undefined;
    }
  }
  // videoReady && alert("video ready");
  const showThePage = ` ${videoReady && styles.showThePage}`
  return (
    <>
      <div className={styles.loaderPage + showThePage}>
        <div className={styles.wrapper}>
          <div className={styles.simple_load_spinner}></div>
        </div>
      </div>

      <div className={styles.splashPage + unsplash}>
        <h1 className={styles.title}>Edison Av</h1>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <button ref={buttonRef} className={styles.splashButton} onClick={() => splashButton()} >
          ENTER
          {/* {iosDevice && */}
          <audio preload="auto" className={styles.audio}>
            <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
          </audio>
          {/* } */}
        </button>
      </div>
      <ErrorHandler>
        {/* {splash &&  */}
        {/* <Video
          splash={splash}
          iosDevice={iosDevice}
          setVideoReady={setVideoReady}
        />
        } */}
        <main className={styles.vidContainer}>
          {/* <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                Play Video
            </button> */}
          <YouTube
            className={styles.format}
            videoId={"N31pvPzqJAY"}
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
          />

        </main>
        {splash && <AudioVisualizer
          iosDevice={iosDevice}
          // videoReady={videoReady}
          getVid={getVid}
          splashContext={splashContext}
          splashAudio={audio}
        // iosButton={iosButton}
        />}
      </ErrorHandler>
      {console.log("iosDevice: " + iosDevice)}
    </>

  );
}

export default SplashPage;
