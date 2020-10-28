import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import { useState, useRef } from 'react';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import React from 'react';
import Video from '../Video/Video';

const SplashPage = ({ playVid }) => {
  const
    [splash, splashState] = useState(false),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [button, setButton] = useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null),
    buttonRef = useRef(null);

  const splashButton = () => {
    splashState(!splash);
    playVid(!splash);
    const
      song = songRef.current,
      audio = new Audio(song.src),
      button = buttonRef.current;
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    let iosDevice = null;
    'webkitAudioContext' in window ? iosDevice = true : null;
    setAudio(audio);
    setButton(button);
    setDevice(iosDevice);
    setSplashConext(context);
    return context.resume() && audio.play();
  }

  return (
    <>
      <div className={styles.splashPage + unsplash}>
        <h1 className={styles.title}>Edison Av</h1>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <button ref={buttonRef} className={styles.splashButton} onClick={() => splashButton()} >
          ENTER
          <audio preload="auto" className={styles.audio}>
            <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
          </audio>
        </button>
      </div>
      <ErrorHandler>
        <Video iosDevice={iosDevice}  />
        {splash && <AudioVisualizer splashContext={splashContext} splashAudio={audio} iosDevice={iosDevice} />}
      </ErrorHandler>
      {console.log("iosDevice: " + iosDevice)}
    </>

  );
}

export default SplashPage;