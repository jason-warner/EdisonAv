import homeStyles from '../../styles/components/SplashPage/SplashPage.module.css';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

const SplashPage = ({playVid}) => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/AudioVisualizer/AudioVisualizer'),
    { ssr: false }  
  );
  const [splash, splashState] = useState(false);
  const unsplash = ` ${splash && homeStyles.unSplash}`;
  const audioVisualizer = <DynamicComponentWithNoSSR splash={splash}/>
  const splashButton = () => {
    splashState(!splash);
    playVid(!splash);
  }
  return(
      <div>      
        <div className={homeStyles.splashPage + unsplash}>
          <h1>Splash</h1>
          <button className={homeStyles.splashButton} onClick={() => splashButton() } >UnSplash</button>
          {console.log(splash)}
        </div>
        <ErrorHandler>
          {splash && audioVisualizer}
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