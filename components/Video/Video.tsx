import styles from '../../styles/components/Video/Video.module.css';
// import { useState, useRef } from 'react';
import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

// splashButton,
const Video = ({ iosDevice, splash }) => {
    let device = iosDevice;
    const
        [button, setButton] = useState(null),
        buttonRef = useRef(null),
        opts = {
            playerVars: {
                autoplay: 1 as 1,
                mute: 1 as 1,
                controls: 0 as 0,
                enablejsapi: 1 as 1,
                playsinline: 1 as 1
            }
        };

    const onReady = (Event: { target: any }) => {
        // access to player in all event handlers via event.target
        setTimeout(() => Event.target.playVideo(), 5000);
        playVid(Event);
    }
    const playVid = (Event: { target: any }) => {
        let button = null;
       const iosPlayVid = () => {
        setButton(button);
        buttonRef.current
        button.onclick = () => Event.target.playVideo();
       }
       device ? iosPlayVid() : null;
    };



    return (
        <main className={styles.vidContainer}>
            {device &&
                <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
                    Play Video
                </button>
            }
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