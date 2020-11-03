// Accreditation goes to Nick Jones. His original vanilla source: https://codepen.io/nfj525/pen/rVBaab
import styles from '../../styles/components/AudioVisualizer/AudioVisualizer.module.css';
import React, { useEffect, useRef } from 'react';
//{ splash }

const AudioVisualizer = ({ iosDevice, audioVideo, splashContext }) => {
  const
    canvasRef = useRef(null),
    buttonRef = useRef(null),
    songRef = useRef(null);
  let
    device = iosDevice,
    video = audioVideo;

  console.log("video " + video);
  const AVLogic = () => {
    const
      song = songRef.current,
      audio = new Audio(song.src),
      context = splashContext,
      iosContext = splashContext;


    console.log("device" + device);
    const
      canvas = canvasRef.current,
      muteButton = buttonRef.current;

    //mute or play on click
    const mutePlay = () => {
      context.state === 'running' ?
        context.suspend()
          .then(() => console.log("changed to : " + context.state))
        : context.resume()
          .then(() => console.log("changed to: " + context.state));
    }
    muteButton.onclick = () => mutePlay();

    //config canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    //config audio analyzer
    // const
    //   src = context.createMediaElementSource(audio),
    //   analyser = context.createAnalyser();
    let
      src = null,
      analyser = null;
      console.log("IOS DEVICE: " + iosDevice)
    if (iosDevice) {
      src = iosContext.createMediaElementSource(audio);
      analyser = iosContext.createAnalyser();
    } else {
      src = context.createMediaElementSource(audio);
      analyser = context.createAnalyser();
    }
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    const
      bufferLength = analyser.frequencyBinCount,
      dataArray = new Uint8Array(bufferLength),
      WIDTH = canvas.width,
      HEIGHT = canvas.height,
      barWidth = (WIDTH / bufferLength) * 2.5;
    let
      barHeight = null,
      x = null;

    //core logic for the visualizer
    const renderFrame = () => {
      ctx.fillStyle = "rgba(0,0,0,0)";
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        let
          r = barHeight + (22 * (i / bufferLength)),
          g = 333 * (i / bufferLength),
          b = 47;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;

        setTimeout(() => {
          ctx.clearRect(0, 0, WIDTH, HEIGHT)
        }, 10);
      }
    }
    renderFrame();
    audioVideo ? context.resume() && audio.play() : undefined;
  };


  //connect audio visualizer logic to DOM and execute logic 
  useEffect(() => {
    try {
      return AVLogic();
    } catch (error) {
      return console.log("Audio Visualizer error: " + error);
    }
  });
  return (
    <>
      <div className={styles.content}>
        <button className={styles.contextButton} ref={buttonRef}></button>
        <canvas ref={canvasRef} className={styles.canvas}></canvas>
        <audio preload="auto" className={styles.audio}>
          <source ref={songRef} src="/FLEXICUTIONEdisonAv.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  )
}
export default AudioVisualizer;
