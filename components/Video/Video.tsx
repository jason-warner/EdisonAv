import styles from '../../styles/components/Video/Video.module.css';
// import { useState, useRef } from 'react';
import { useRef, useState } from 'react';
import YouTube from 'react-youtube';


const Video = ({ splashButton }) => {

    console.log(splashButton)
    const
        [button, setButton] = useState(null),
        buttonRef = useRef(null),
        opts = {
            playerVars: {
                mute: 1 as 1,
                controls: 0 as 0,
                enablejsapi: 1 as 1,
                playsinline: 1 as 1
            }
        };

    const onReady = (Event: { target: any }) => {
        // access to player in all event handlers via event.target
        console.log(Event.target)
        Event.target.playVideo();
        playVid(Event);
      }
    const playVid = (Event: { target: any }) => {
        const button = buttonRef.current;
        setButton(button);
        button.addEventListener("click", () => {
            console.log(Event.target)
            Event.target.pauseVideo();
        });
        // access to player in all event handlers via event.target
      }

    // console.log(button);

    // const onReady = () => {
    //     playVid;
    // }
    // const playVid = (Event: { target: any }) => {
    //     const button = buttonRef.current;
    //     setButton(button);
    //     button.addEventListener("click", () => {
    //         console.log(Event.target)
    //         Event.target.pauseVideo();
    //     });
    // }


    return (
        <main className={styles.vidContainer}>
            <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                Play Video
            </button>
            <YouTube
                className={styles.format}
                videoId={"N31pvPzqJAY"}
                opts={opts}
                onReady={onReady}
            />

        </main>
    )
}

export default Video;