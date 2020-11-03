import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import { useState, useRef } from 'react';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import React from 'react';
import Video from '../Video/Video';

const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [videoReady, setVideoReady] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null),
    buttonRef = useRef(null);
    
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
      // return context.resume() && iosAudio.play();
      return context.resume() && iosAudio.play();
    }

  }

  return (
    <>
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
        {splash && <Video
          iosDevice={iosDevice}
          setVideoReady={setVideoReady}
        />}
        {splash && <AudioVisualizer
          iosDevice={iosDevice}
          videoReady={videoReady}
          splashContext={splashContext}
          splashAudio={audio}
        />}
      </ErrorHandler>
      {console.log("iosDevice: " + iosDevice)}
    </>

  );
}

export default SplashPage;




      // [button, setButton] = useState(null),
      // button = buttonRef.current;
      // setButton(button);