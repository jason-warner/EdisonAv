// Accreditation and respect goes to Nick Jones. His original vanilla source: https://codepen.io/nfj525/pen/rVBaab
import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, {useEffect, useRef} from 'react';

const AudioVisualizer = () => {
    alert("AV #1");
    const canvasRef = useRef(null);
    const songRef = useRef(null);
    const buttonRef = useRef(null)
    useEffect(() => {
      alert('AV #2');
      const AVLogic = () => {
        const song = songRef.current;
        const canvas = canvasRef.current;
        const audio = new Audio(song.src);
        const suresBtn = buttonRef.current;
        alert('AV #3');
        function unlockAudioContext(context) {
          if (context.state !== 'suspended') return console.log("UNLOCKED #1" + context.state);
          console.log("UNLOCKED #2: " + context.state);
          const b = document.body;
          const events = ['touchstart','touchend', 'mousedown','keydown'];
          events.forEach(e => b.addEventListener(e, unlock, false));
          function unlock() { context.resume().then(clean); }
          function clean() { events.forEach(e => b.removeEventListener(e, unlock)); }
        }
        suresBtn.onclick = function() {
          if(context.state === 'running') {
            context.suspend()
            .then(function() {
              console.log("SUSPEND: " + context.state);
            });  
          } else if(context.state === 'suspended') {
            context.resume()
            .then(function() {
              console.log("RESUME: " + context.state);
            });  
          }
        }
        audio.load();
        // let AudioContext = null;
        'webAudioContext' in window ? AudioContext = window.webkitAudioContext : AudioContext = window.AudioContext;
        // const context = new (window.AudioContext || window.webkitAudioContext)(); 
        const context = new AudioContext;           
        unlockAudioContext(context);
        const src = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
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
          unlockAudioContext(context)
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
            <button className={styles.contextButton} ref={buttonRef}></button>
                <canvas ref={canvasRef} className={styles.canvas}></canvas>
                <audio preload="auto" className={styles.audio}>
                    <source src="/FLEXICUTIONEdisonAv.mp3" ref={songRef} type="audio/mpeg"/>
                </audio>
            </div>
      </div>
  )
}
export default AudioVisualizer;