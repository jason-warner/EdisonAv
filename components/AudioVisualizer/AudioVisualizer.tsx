import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, {useEffect, useRef} from 'react';

const AudioVisualizer = () => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    window.onload = function() {
        
        // useEffect(() => {
        // let audioRef: HTMLMediaElement = document.querySelector('.audio')
        const audioViz = () => {
        //   audioRef.load();
        const audioRef = useRef();
        console.log(audioRef.current);
        alert(audioRef.current);
          audioRef.play();

          var context = new AudioContext();
          var src = context.createMediaElementSource(audioRef);
          var analyser = context.createAnalyser();
      
          var canvas = document.querySelector(".canvas");
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          var ctx = canvas.getContext("2d");
      
          src.connect(analyser);
          analyser.connect(context.destination);
      
          analyser.fftSize = 256;
      
          var bufferLength = analyser.frequencyBinCount;
          console.log(bufferLength);
      
          var dataArray = new Uint8Array(bufferLength);
      
          var WIDTH = canvas.width;
          var HEIGHT = canvas.height;
      
          var barWidth = (WIDTH / bufferLength) * 2.5;
          var barHeight;
          var x = 0;
      
          function renderFrame() {
            requestAnimationFrame(renderFrame);
      
            x = 0;
      
            analyser.getByteFrequencyData(dataArray);
      
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
      
            for (var i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              
              var r = barHeight + (25 * (i/bufferLength));
              var g = 250 * (i/bufferLength);
              var b = 50;
      
              ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
              ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      
              x += barWidth + 1;
            }
          }
      
          audioRef.play();
          renderFrame();
        };
        audioViz();
    // });
        
      };
    // }
    // });

  return (
      <div>
          <div className={styles.content}>
                <input type="file" className={styles.thefile} accept="audio/*" />
                <canvas className={styles.canvas}></canvas>
                <audio ref={audioRef} className={styles.audio} controls autoPlay>
                    <source src="../../FLEXICUTIONEdisonAv.mp3" type="audio/mpeg"/>
                </audio>
                {/* <button onClick={()=>AudioViz()} */}
                {alert(audioRef)}
                {console.log(audioRef)}
            </div>
      </div>
  )
}

export default AudioVisualizer;