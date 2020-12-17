import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/pages/music.module.css';

const Music = () => {
    const
        urlStart = "https://bandcamp.com/EmbeddedPlayer/album=",
        urlMiddle = "/size=large/bgcol=333333/linkcol=e99708/",
        urlEnd = "/transparent=true/",
        album = [
            ["3034801347"],
            ["3127991974"],
            ["1608608963"],
            ["2588995912"],
            ["3603910795"],
            ["782549545"]
        ];
    let url = null;
    return (
        <div className={styles.music}>
            <Navbar
                context={null}
                audio={null}
            />
            <main className={styles.main}>
                <section className={styles.albumGrid}>
                    <ul>
                        {album.map((album, index) => {
                            url = urlStart + album + urlMiddle + "tracklist=false" + urlEnd;
                            return (
                                <li key={index} >
                                    <div className={"wrapper " + styles.wrapper2}>
                                        <div className="simple_load_spinner" />
                                    </div>
                                    <iframe
                                        className={styles.player1}
                                        src={url}
                                        seamless
                                        height={"420px"}
                                    >
                                    </iframe>
                                </li>
                            );
                        })}
                    </ul>
                </section>
                {/* <section>
                    <iframe width="100%" height="450" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185155755&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/edison-av" title="Edison Av" target="_blank">Edison Av</a> · <a href="https://soundcloud.com/edison-av/furious-anger" title="Furious Anger" target="_blank">Furious Anger</a></div>
                </section> */}
            </main>

        </div>
    );
}

export default Music;

// import { useState, useRef, useEffect } from 'react';

// const [buttonClicked, buttonIs] = useState(false);
// const playlist = () => buttonClicked ? "tracklist=true" : "tracklist=false";
// const playerHeight = () => buttonClicked ? "786px" : "420px";
// const buttonRef = useRef(null);

// height = playerHeight(),
// tracklist = playlist(),


//might work if you figure out how to use reference the child of loop while referencing the active index
// useEffect(() => {
//     if(buttonRef.current.id === index) {
//         url = urlStart + album + urlMiddle + tracklist + urlEnd;
//     }
// });


{/* <button
                                        type="button"
                                        ref={buttonRef}
                                        key={index}
                                        className={styles.tracklist}
                                        onClick={() =>  !buttonClicked}
                                        id={`${index}`}
                                    >
                                        Tracklist
                                    </button> */}