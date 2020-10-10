import homeStyles from '../../styles/pages/home.module.css';
import {useState} from 'react';
import dynamic from 'next/dynamic';


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
    // access 
    // $("#video")[0].src += "&autoplay=1";
  }

  return(
      <div>
        {splash && audioVisualizer}
        <div className={homeStyles.splashPage + unsplash}>
          <h1>Splash</h1>
          {console.log("splash 1 " + splash)}
          <button className={homeStyles.splashButton} onClick={() => splashButton() } >UnSplash</button>
          {console.log("splash 2 " + splash)}
        </div>
      </div>
  );
}



export default SplashPage;

