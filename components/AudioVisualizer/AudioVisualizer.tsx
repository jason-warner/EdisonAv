//https://codepen.io/nfj525/pen/rVBaab
import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, {useEffect, useRef} from 'react';
// import song from '../../public/FLEXICUTIONEdisonAv.mp3';

const AudioVisualizer = () => {
    const canvasRef = useRef(null);
    const songRef = useRef(null);
    useEffect(() => {
    // window.onload = function() {
        const song = songRef.current;
        const audioViz = () => {
          const audio = new Audio(song);
          audio.load();
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

          console.log(bufferLength);

          const dataArray = new Uint8Array(bufferLength);
          const WIDTH = canvas.width;
          const HEIGHT = canvas.height;
          const barWidth = (WIDTH / bufferLength) * 2.5;
          var barHeight;
          let x = 0;

          // alert("2");

          function renderFrame() {

            requestAnimationFrame(renderFrame);
            x = 0;
            analyser.getByteFrequencyData(dataArray);
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
      
            for (let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              
              let r = barHeight + (25 * (i/bufferLength));
              let g = 250 * (i/bufferLength);
              let b = 50;
      
              ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
              ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
              x += barWidth + 1;
              // console.log(i)
            }
            // console.log("renderingFrame");
          }
          audio.play();
          return renderFrame();
        };
        return audioViz();
      // };
    });
  return (
      <div>
          <div className={styles.content}>
                <canvas ref={canvasRef} className={styles.canvas}></canvas>
                <audio controls className={styles.audio}>
                    <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg"/>
                    {/* <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/ogg" /> */}
                </audio>
            </div>
      </div>
  )
}

export default AudioVisualizer;

































// import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
// import React, {useEffect, useRef} from 'react';

// const AudioVisualizer = () => {
//     // useEffect(() => {
//     //     if (typeof window !== 'undefined') {
//     window.onload = function() {
        
//         // useEffect(() => {
//         // let audioRef: HTMLMediaElement = document.querySelector('.audio')
//         const audioViz = () => {
//         //   audioRef.load();
//         const audioRef = useRef();
//         console.log(audioRef.current);
//         alert(audioRef.current);
//           audioRef.play();

//           var context = new AudioContext();
//           var src = context.createMediaElementSource(audioRef);
//           var analyser = context.createAnalyser();
      
//           var canvas = document.querySelector(".canvas");
//           canvas.width = window.innerWidth;
//           canvas.height = window.innerHeight;
//           var ctx = canvas.getContext("2d");
      
//           src.connect(analyser);
//           analyser.connect(context.destination);
      
//           analyser.fftSize = 256;
      
//           var bufferLength = analyser.frequencyBinCount;
//           console.log(bufferLength);
      
//           var dataArray = new Uint8Array(bufferLength);
      
//           var WIDTH = canvas.width;
//           var HEIGHT = canvas.height;
      
//           var barWidth = (WIDTH / bufferLength) * 2.5;
//           var barHeight;
//           var x = 0;
      
//           function renderFrame() {
//             requestAnimationFrame(renderFrame);
      
//             x = 0;
      
//             analyser.getByteFrequencyData(dataArray);
      
//             ctx.fillStyle = "#000";
//             ctx.fillRect(0, 0, WIDTH, HEIGHT);
      
//             for (var i = 0; i < bufferLength; i++) {
//               barHeight = dataArray[i];
              
//               var r = barHeight + (25 * (i/bufferLength));
//               var g = 250 * (i/bufferLength);
//               var b = 50;
      
//               ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//               ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      
//               x += barWidth + 1;
//             }
//           }
      
//           audioRef.play();
//           renderFrame();
//         };
//         audioViz();
//     // });
        
//       };
//     // }
//     // });

//   return (
//       <div>
//           <div className={styles.content}>
//                 <input type="file" className={styles.thefile} accept="audio/*" />
//                 <canvas className={styles.canvas}></canvas>
//                 <audio ref={audioRef} className={styles.audio} controls autoPlay>
//                     <source src="../../FLEXICUTIONEdisonAv.mp3" type="audio/mpeg"/>
//                 </audio>
//                 {/* <button onClick={()=>AudioViz()} */}
//                 {alert(audioRef)}
//                 {console.log(audioRef)}
//             </div>
//       </div>
//   )
// }

// export default AudioVisualizer;