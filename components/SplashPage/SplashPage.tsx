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
    [button, setButton] =useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null),
    buttonRef = useRef(null);
  const splashButton = (e) => {
    splashState(!splash);
    playVid(!splash);
    const
      song = songRef.current,
      audio = new Audio(song.src);
      // button = buttonRef.current;
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    setAudio(audio);
    setButton(e);
    console.log(e);
    console.log(button);
    return context.resume() && setTimeout(() => audio.play(), 1500 );
  }
  return (
    <>
      <div className={styles.splashPage + unsplash}>
        <h1 className={styles.title}>Edison Av</h1>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <button ref={buttonRef} className={styles.splashButton} onClick={(e) => splashButton(e)} >
          ENTER
          <audio preload="auto" className={styles.audio}>
            <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
          </audio>
        </button>
      </div>
      <ErrorHandler>
        {splash && <Video splashButton={button} />}
        {splash && <AudioVisualizer splashContext={splashContext} splashAudio={audio} />}
      </ErrorHandler>

    </>

  );
}

export default SplashPage;


// import YouTube from 'react-youtube';


  // const opts = {
  //   height: '100%',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1 as 1,
  //     mute: 1 as 1,
  //     controls: 0 as 0,
  //   }
  // };
  // const onReady = (Event: { target: any }) => {
  //   // access to player in all event handlers via event.target
  //   Event.target.pauseVideo();
  //   console.log(Event.target.pauseVideo());
  //   setTimeout(() => Event.target.playVideo(), 100);
  // }

    //{play && addAutoPlay()}

    // let iosDevice = null;
    // 'webkitAudioContext' in window ? iosDevice = true : null;
    // return iosDevice && context.resume() && audio.play();