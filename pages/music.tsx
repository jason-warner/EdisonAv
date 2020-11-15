import Navbar from '../components/Navbar/Navbar';
import { useState, Fragment } from 'react';
import styles from '../styles/pages/music.module.css';
// import MusicGrid from '../components/MusicGrid/MusicGrid'

const Music = () => {
    const [buttonClicked, buttonIs] = useState(false);
    const playlist = () => buttonClicked ? "tracklist=true" : "tracklist=false";
    const playerHeight = () => buttonClicked ? "786px" : "420px";

    const
        height = playerHeight(),
        urlStart = "https://bandcamp.com/EmbeddedPlayer/album=",
        urlMiddle = "/size=large/bgcol=333333/linkcol=e99708/",
        urlEnd = "/transparent=true/",
        tracklist = playlist(),
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
            <Navbar context={null} audio={null} />
            <h1 className={styles.title}>Music</h1>
            <main className={styles.main}>
                <section className={styles.albumGrid}>
                    <ul>
                        {album.map((album, index) => {
                            url = urlStart + album + urlMiddle + tracklist + urlEnd;
                            return (
                                <li key={index} >
                                    <button key={index} className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                        Tracklist
                                    </button>
                                    <iframe
                                        className={styles.player1}
                                        src={url}
                                        seamless
                                        height={height}
                                    >
                                    </iframe>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </main>

        </div>
    );
}

export default Music;