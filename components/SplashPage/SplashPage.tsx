import styles from '../../styles/components/SplashPage/SplashPage.module.css';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Video from '../Video/Video';
import React from 'react';


const SplashPage = () => {
  const
    [splash, splashState] = useState(false),
    [videoReady, setVideoReady] = useState(null),
    [getVid, setdaVid] = useState(null),
    [iosDevice, setDevice] = useState(null),
    [splashContext, setSplashConext] = useState(null),
    [audio, setAudio] = useState(null),
    [killSwitch, setKillSwitch] = useState(false),
    [, setButton] = useState(null),
    [charzarr, setCharzarr] = useState([]),
    [charCount, setCharCount] = useState([]),
    [killCount, setKillCount] = useState([]),
    songRef = useRef(null),
    buttonRef = useRef(null),
    charRef = useRef(null);

  const
    unsplash = ` ${splash && styles.unSplash}`,
    showThePage = ` ${videoReady && styles.showThePage}`;

  const splashButton = () => {
    let context = null;
    'webkitAudioContext' in window ?
      context = new window.webkitAudioContext
      : context = new window.AudioContext;
    setSplashConext(context);
    splashState(!splash);
    let iosDevice: boolean = null;
    const
      iosSong = songRef.current,
      iosAudio = new Audio(iosSong.src);
    setAudio(iosAudio);
    if ('webkitAudioContext' in window) {
      iosDevice = true;
      setDevice(iosDevice);
      // return iosDevice && getVid ? iosAudio.play() : undefined;
      return context.resume() && setTimeout(() => iosAudio.play(), 100);
    }
  }

  const playVid = (Event: { target: any }) => {
    let button = null;
    const iosPlayVid = () => {
      button = buttonRef.current
      setButton(button);
      button.onclick = () => Event.target.playVideo();
    }
    return iosPlayVid();
  };






  //TITLE ITERATION START

  let
    charTitle: string[] = ["Edison Av"],
    charSpeed: number = 10,
    charStart: number = 0,
    charEnd: number[] = [],
    charStarter: string = null;
  charTitle = charTitle[0].split("");
  useEffect(() => {
    !killSwitch && charTitle.map((char, index) => {

      //create the array to hold the title's ending char codes
      charEnd.push(char.charCodeAt(0));

      //create unique counter starting points for each char in title
      //// charStart = charStart + index;
      charStart = charStart + index;
      charCount[index] = charStart;
      setCharCount(prevArr => [...prevArr, charCount]);

      //only one character can be in the charzarr array
      charStarter = String.fromCharCode(charCount[index]);
      charzarr[index] = charStarter;
    });
    killCount[0] = 0;
    const addInterval = setInterval(() => {
      addChar();
    }, charSpeed);

    if (killSwitch) {
      console.log("KILLSWITCHED");
      // console.log('killcount[0]: ' + killCount[0]);
      return clearInterval(addInterval);
    }
    console.log('killcount[0]: ' + killCount[0]);
  }, [killSwitch])





  const addChar = () => {
    charEnd.map((charCode, index) => {
      if (charCount[index] === (charCode + 1)) {
        if (killCount[index] >= ((charTitle.length + 1))) {
          //kill all once killcount is equal to length of title
          return setKillSwitch(true);
        } else {
          //increment the kill counter until each char is solved
          (killCount[0])++;
          return setKillCount(prevArr => [...prevArr, killCount])
        }
      } else {
      //assign the iterated num as charcode
      let char: string = String.fromCharCode(charCount[index]);
      //increment current index of counter arr
      (charCount[index])++;
      setCharCount(prevArr => [...prevArr, charCount]);
      //replace the index of dom arr with iterated char
      return charzarr[index] = char;
      // setCharzarr(prevArr => [...prevArr, charzarr]);
      }
    })
  }




  //TITLE ITERATION END


  const createMarkup = () => {
    return { __html: charzarr.join("") };
  }





  return (
    <>
      <div className={styles.splashPage + unsplash}>
        <div ref={charRef} className={styles.charzarr}>
          {
            charzarr.map((char, zar) => {
              return (
                <span className={styles.splashTitle} key={zar}>
                  {char}
                </span>
              );
            })
          }
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <p className={styles.disclaimer}>Enter for audio, video and cookies.</p>
        <div className={styles.icons}>
          <span>&#128266;</span>
          <span>&#127909;</span>
          <span>&#127850;</span>
        </div>
        {!videoReady ?
          <div className={styles.loaderPage + showThePage}>
            <div className={"wrapper " + styles.wrapper2}>
              <div className="simple_load_spinner"></div>
            </div>
          </div>
          :
          <button
            ref={buttonRef}
            className={styles.splashButton}
            onClick={splashButton}
          > ENTER
            <audio preload="auto" className={styles.audio}>
              <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
            </audio>
          </button>
        }
      </div>

      {splash &&
        <Navbar
          context={splashContext}
          audio={audio}
        />
      }

      <ErrorHandler>
        <main className={styles.vidContainer}>
          <Video
            setVideoReady={setVideoReady}
            setdaVid={setdaVid}
            playVid={playVid}
          />

        </main>
        {splash &&
          <AudioVisualizer
            iosDevice={iosDevice}
            getVid={getVid}
            splashContext={splashContext}
            splashAudio={audio}
          />
        }
      </ErrorHandler>
    </>
  );
}

export default SplashPage;


// useEffect(() => {
//   const iosPlay = () => {
//     const
//       iosSong = songRef.current,
//       iosAudio = new Audio(iosSong.src);
//     return getVid && iosAudio.play();
//   }
// }, [getVid])







{/* <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                Play Video
            </button> */}
{/* <YouTube
            className={styles.format}
            videoId={"N31pvPzqJAY"}
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
          /> */}

  // const opts = {
  //   playerVars: {
  //     mute: 1 as 1,
  //     controls: 0 as 0,
  //     enablejsapi: 1 as 1,
  //     playsinline: 1 as 1
  //   }
  // };

  // const onReady = (Event: { target: any }) => {
  //   Event.target.playVideo()
  //   setTimeout(() => Event.target.pauseVideo(), 100);
  //   setVideoReady(true);
  //   playVid(Event);

  // }


  // const onPlay = () => {
  //   // setVideoReady(true);
  //   setdaVid(true);
  // }

  // const iterator = () => {
  //   console.log('1 ITERATOR START');
  //   let iterate = false;
  //   // for (let i = 33; i < 126; i++) {
  //     console.log('2 FOR LOOP START. i = ' + (i - 32));
  //     let char = String.fromCharCode(i).toString();
  //     let charRef.current.childNodes = charRef.current.childNodes.length
  //     if (charRef.current.childNodes < 1) {
  //       iterate = false;
  //       setCharzarr(arr => [...arr, char])
  //       console.log('3 ADD A CHAR // arr: ' + charRef.current.childNodes);
  //     }
  //     else if (charRef.current.childNodes > 0) {
  //       charRef.current.removeChild(charRef.current.childNodes[0]);
  //       console.log('4 REMOVE A CHAR // arr: ' + charRef.current.childNodes);
  //     }
  //   // }
  // }




