// Accreditation and respect goes to Nick Jones. His original vanilla source: https://codepen.io/nfj525/pen/rVBaab
import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, {useEffect, useRef} from 'react';

const AudioVisualizer = () => {

    const canvasRef = useRef(null);
    const songRef = useRef(null);

    useEffect(() => {
          const AVLogic = () => {
            const song = songRef.current;
            const audio = new Audio(song.src);
            
            audio.load();
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const context = new AudioContext();
            const src = context.createMediaElementSource(audio);
            const analyser = context.createAnalyser();
            const canvas = canvasRef.current;
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const ctx = canvas.getContext("2d");
            
            src.connect(analyser);
            analyser.connect(context.destination);
            analyser.fftSize = 256;
            
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            const WIDTH = canvas.width;
            const HEIGHT = canvas.height;
            const barWidth = (WIDTH / bufferLength) * 2.5;
            let barHeight = null;
            let x = 0;

            function renderFrame() {
              ctx.fillStyle = "rgba(0,0,0,0)";
              requestAnimationFrame(renderFrame);
              x = 0;
              analyser.getByteFrequencyData(dataArray);
              ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
              for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];

                let r = barHeight + (22 * (i/bufferLength));
                let g = 333 * (i/bufferLength);
                let b = 47;

                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 1;

                const fadeOut = () => {
                  setTimeout(() => {
                    ctx.clearRect(0, 0, WIDTH, HEIGHT)
                  }, 1)
                }
                fadeOut();
              }
            }
            setTimeout(() => {
              audio.play();
              return renderFrame();
            }, 1000);
        };
        try {
          return AVLogic();
        } catch (error) {
          console.log("Audio Visualizer error: " + error);
        }
    });
  return (
      <div>
          <div className={styles.content}>
                <canvas ref={canvasRef} className={styles.canvas}></canvas>
                <audio className={styles.audio}>
                    <source src="/FLEXICUTIONEdisonAv.mp3" ref={songRef} type="audio/mpeg"/>
                </audio>
            </div>
      </div>
  )
}
export default AudioVisualizer;