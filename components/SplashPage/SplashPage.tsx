import homeStyles from '../../styles/pages/home.module.css';
import {useState} from 'react';
import dynamic from 'next/dynamic';


const SplashPage = () => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/AudioVisualizer/AudioVisualizer'),
    { ssr: false }  
  );
  const [splash, splashState] = useState(false);
  const unsplash = ` ${splash && homeStyles.unSplash}`;
  const audioVisualizer = <DynamicComponentWithNoSSR />
  const splashButton = () => {
    splashState(!splash);
    // access 
    // $("#video")[0].src += "&autoplay=1";
  }

  return(
      <div>
        {splash && audioVisualizer}
        <div className={homeStyles.splashPage + unsplash}>
          <h1>Splash</h1>
          <button className={homeStyles.splashButton} onClick={() => splashButton() } >UnSplash</button>
        </div>
      </div>
  );
}



export default SplashPage;

