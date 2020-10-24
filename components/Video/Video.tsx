import styles from '../../styles/components/Video/Video.module.css';
// import { useState, useRef } from 'react';
import React from 'react';
import YouTube from 'react-youtube';


const Video = ({ splashButton }) => {

    console.log(splashButton)

    const opts = {
        playerVars: {
            // autoplay: 1 as 1,
            mute: 1 as 1,
            controls: 0 as 0,
        }
    };

    // const onReady = (Event: { target: any }) => {
    //     // access to player in all event handlers via event.target
    //     Event.target.pauseVideo();
    //     setTimeout(() => Event.target.playVideo(), 100);
    //   }

    const onReady = splashButton.onclick = (Event) => {
        Event.target.playVideo();
        // setTimeout(() => Event.target.playVideo(), 100);
    }



    return (
        <main className={styles.vidContainer}>
            <YouTube className={styles.format}
                videoId={"N31pvPzqJAY"}
                opts={opts}
                onReady={onReady}
            />
        </main>
    )
}

export default Video;