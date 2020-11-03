import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import { useState, useRef } from 'react';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import React from 'react';
import Video from '../Video/Video';
//{ playVid }
const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [audioVideo, setAudioVideo] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    // [button, setButton] = useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null),
    buttonRef = useRef(null);

  const splashButton = () => {
    splashState(!splash);
    let iosDevice = null;
    let context = null;
      'webkitAudioContext' in window ?
        context = new window.webkitAudioContext
        : context = new window.AudioContext;
    if ('webkitAudioContext' in window) {
      iosDevice = true
      setDevice(iosDevice);
      const
        iosSong = songRef.current,
        iosAudio = new Audio(iosSong.src);
      // button = buttonRef.current;
      setAudio(iosAudio);
      // setButton(button);
      return context.resume() && iosAudio.play();
    }
    setSplashConext(context);
  }

  return (
    <>
      <div className={styles.splashPage + unsplash}>
        <h1 className={styles.title}>Edison Av</h1>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <button ref={buttonRef} className={styles.splashButton} onClick={() => splashButton()} >
          ENTER
          {iosDevice &&
            <audio preload="auto" className={styles.audio}>
              <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
            </audio>}
        </button>
      </div>
      <ErrorHandler>
        {splash && <Video
          iosDevice={iosDevice}
          setAudioVideo={setAudioVideo}
        />}
        {splash && <AudioVisualizer
          iosDevice={iosDevice}
          audioVideo={audioVideo}
          splashContext={splashContext}
        />}
      </ErrorHandler>
      {console.log("iosDevice: " + iosDevice)}
    </>

  );
}

export default SplashPage;
