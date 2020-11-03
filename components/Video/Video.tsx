import styles from '../../styles/components/Video/Video.module.css';
// import { useState, useRef } from 'react';
// import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

// splashButton,
const Video = ({ iosDevice, setVideoReady }) => {
    let ios = iosDevice;
    const
        // [button, setButton] = useState(null),
        // buttonRef = useRef(null),
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
        Event.target.playVideo();
        // playVid(Event);
    }
    // const playVid = (Event: { target: any }) => {
    //     const button = buttonRef.current;
    //     setButton(button);
    //     button.onclick = () => Event.target.playVideo();
    // };
    const onPlay = () => {
        setVideoReady(true);
    }


    return (
        <main className={styles.vidContainer}>
            {/* <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                Play Video
            </button> */}
            <YouTube
                className={styles.format}
                videoId={"N31pvPzqJAY"}
                opts={opts}
                onReady={onReady}
                onPlay={onPlay}
            />

        </main>
    )
}

export default Video;