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
  const audioVisualizer = <DynamicComponentWithNoSSR />
  const splashButton = () => {
    splashState(!splash);
    playVid(!splash);
  }
  return(
      <div>
        <ErrorHandler>
          {splash && audioVisualizer}
        </ErrorHandler>
        
        <div className={homeStyles.splashPage + unsplash}>
          <h1>Splash</h1>
          <button className={homeStyles.splashButton} onClick={() => splashButton() } >UnSplash</button>
        </div>
      </div>
  );
}

export default SplashPage;

