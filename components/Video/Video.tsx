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

    const onReady = (Event: { target: any }) => {
        setVideoReady(true);
        return playVid(Event);
    }

    const onPlay = () => {
        return setdaVid(true);
    }

    const onStateChange = (Event: { target: any }) => {
        console.log(Event.target.getPlayerState())
    }

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


    // const playVid = (Event: { target: any }) => {
    //     const iosPlayVid = () => {
    //         setButton(button);
    //         button.onclick = () => Event.target.playVideo();
    //     }
    //     return iosPlayVid()
    // };

    // const
        // [button, setButton] = useState(null),
        // buttonRef = useRef(null),
        // opts = {
        //     playerVars: {
        //         mute: 1 as 1,
        //         controls: 0 as 0,
        //         enablejsapi: 1 as 1,
        //         playsinline: 1 as 1
        //     }
        // };
    // let itsReady = null;
    // const waitForIt = async (Event: { target: any }) => {
    //     itsReady = await splash
    //     console.log(itsReady)
    //     return itsReady && Event.target.playVideo();
    // }



    // const somf = (Event) => {
    //     splash && Event.target.playVideo()
    // }

    // const onReady = (Event: { target: any }) => {
    //     // access to player in all event handlers via event.target
    //     setVideoReady(true);
    //     Event.target.playVideo()
    // }







            // {/* <button ref={buttonRef} className={styles.playButton} onClick={playVid} >
            //     Play Video
            // </button> */}
                // const playVid = (Event: { target: any }) => {
    //     const button = buttonRef.current;
    //     setButton(button);
    //     button.onclick = () => ;
    // };
    // const onPlay = () => {
    //     // setVideoReady(true);
    // }
