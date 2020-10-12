// Accreditation and respect goes to Nick Jones. His original vanilla source: https://codepen.io/nfj525/pen/rVBaab
import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, {useEffect, useRef} from 'react';

const AudioVisualizer = () => {
    // alert("AV #1");
    const canvasRef = useRef(null);
    const songRef = useRef(null);
    const buttonRef = useRef(null)
    useEffect(() => {
      // alert('AV #2');
      const AVLogic = () => {
        const song = songRef.current;
        const canvas = canvasRef.current;
        const audio = new Audio(song.src);
        const suresBtn = buttonRef.current;
        alert('AV #3');
        function unlockAudioContext(context) {
          if (context.state !== 'suspended') return console.log("UNLOCKED #1 " + context.state);
          console.log("UNLOCKED #2 " + context.state);
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
        alert('AV #4');
        audio.load();
        alert('AV #5');
        // let AudioContext = null;
        // const context = new AudioContext;
        let context = new (window.AudioContext || window.webkitAudioContext)(); 
        alert('AV #6' + context.state);
        if('webkitAudioContext' in window) {
        alert("NEED WEBKIT");
          context = new window.webkitAudioContext();
        } else {alert('DONT NEED WEBKIT')}
        alert('AV #7');
        unlockAudioContext(context);
        alert('AV #8'  + context.state);
        const src = context.createMediaElementSource(audio);
        alert('AV #9'  + context.state);
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
        alert('AV #10' + context.state);
        function renderFrame() {
          // alert('AV #11');
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
          // alert('AV #12');
        }
        setTimeout(() => {
          alert('AV #13' + context.state);
          audio.play();
          alert('AV #14' + context.state);
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