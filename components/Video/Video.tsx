import styles from '../../styles/components/Video/Video.module.css';
import YouTube from 'react-youtube';

const Video = ({ setVideoReady, setdaVid, playVid }) => {
    const opts = {
        playerVars: {
            mute: 1 as 1,
            controls: 0 as 0,
            enablejsapi: 1 as 1,
            playsinline: 1 as 1
        }
    };

    const
        onReady = (Event: { target: any }) => {
            setVideoReady(true);
            return playVid(Event);
        },

        onPlay = () => {
            return setdaVid(true);
        },

        onStateChange = (Event: { target: any }) => {
            console.log(Event.target.getPlayerState())
        };

    return (
        <main className={styles.vidContainer}>

            <YouTube
                className={styles.format}
                videoId={"N31pvPzqJAY"}
                opts={opts}
                onReady={onReady}
                onPlay={onPlay}
                onStateChange={onStateChange}
            />

        </main>
    )
}

export default Video;
