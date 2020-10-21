import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

const SplashPage = ({playVid}) => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/AudioVisualizer/AudioVisualizer'),
    { ssr: false }  
  );
  const [splash, splashState] = useState(false);
  const unsplash = ` ${splash && styles.unSplash}`;
  const splashButton = () => {
    splashState(!splash);
    playVid(!splash);
  }
  return(
      <div>      
        <div className={styles.splashPage + unsplash}>
          <h1 className={styles.title}>Edison Av</h1>
          <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
          <button className={styles.splashButton} onClick={() => splashButton() } >Enter</button>
          {console.log(splash)}
        </div>
        <ErrorHandler>
          {splash && <DynamicComponentWithNoSSR />}
        </ErrorHandler>
      </div>
  );
}

export default SplashPage;





// let context = null;
// 'webkitAudioContext' in window ? context = new window.webkitAudioContext : context = new window.AudioContext;
// alert("initial state: " + context.state)
// if(context.state === 'suspended') {
//   alert("CONTEXT SUPENDED: " + context.state)
//   context.resume().then(() => alert("Should be resumed: " + context.state));
// } else {alert("you're not on ios!: " + context.state)}