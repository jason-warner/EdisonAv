import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import ErrorHandler from '../ErrorHandler/ErrorHandler';


const SplashPage = ({ playVid }) => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../AudioVisualizer/AudioVisualizer'),
    { ssr: false }
  );
  const
    [splash, splashState] = useState(false),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    unsplash = ` ${splash && styles.unSplash}`,
    songRef = useRef(null);

  const splashButton = () => {
    splashState(!splash);
    playVid(!splash);
    const
      song = songRef.current,
      audio = new Audio(song.src);
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    setAudio(audio);
    // let iosDevice = null;
    // 'webkitAudioContext' in window ? iosDevice = true : null;
    // return iosDevice && context.resume() && audio.play();
    return context.resume() && audio.play();
  }
  return (
    <div>
      <div className={styles.splashPage + unsplash}>
        <h1 className={styles.title}>Edison Av</h1>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <button className={styles.splashButton} onClick={() => splashButton()} >
          ENTER
          <audio preload="auto" className={styles.audio}>
            <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
          </audio>
        </button>
      </div>

      <ErrorHandler>
        {splash && <DynamicComponentWithNoSSR splashContext={splashContext} splashAudio={audio} />}
      </ErrorHandler>

    </div>

  );
}

export default SplashPage;