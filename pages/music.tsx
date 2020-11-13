import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import gStyles from '../styles/globals.module.css';
import styles from '../styles/pages/music.module.css';
const Music = () => {
    const [buttonClicked, buttonIs] = useState(false);
    const playlist = () => buttonClicked ? "tracklist=true" : "tracklist=false";
    const playerHeight = () => buttonClicked ? "786px" : "420px";
    const
        url1 = "https://bandcamp.com/EmbeddedPlayer/album=3034801347/size=large/bgcol=333333/linkcol=e99708/",
        url2 = playlist(),
        url3 = "/transparent=true/",
        url = url1 + url2 + url3,
        height = playerHeight();
    return (
        <div className={styles.music}>
            <Navbar context={null} audio={null} />
            <h1 className={styles.title}>Music</h1>
            <main className={styles.main}>
                <section className={styles.albumGrid}>
                    <ul>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                        <li>
                            <button className={styles.tracklist} onClick={() => buttonIs(!buttonClicked)}>
                                Tracklist
                            </button>
                            <iframe
                                className={styles.player1}
                                src={url}
                                seamless
                                height={height}
                            >
                                <a href="https://edisonav.bandcamp.com/album/lucid-dreams">Lucid Dreams by Edison Av</a>
                            </iframe>
                        </li>
                    </ul>
                </section>
            </main>

        </div>
    );
}

export default Music;