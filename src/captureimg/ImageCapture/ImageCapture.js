import html2canvas from "html2canvas";
import React, { useRef } from "react";
import styles from "./ImageCapture.css";

const ImageCapture = (props) => {
  const captureRef = useRef();
  const captureImageHandler = (event) => {
    const ele = document.querySelector("#screenshot");
    const bound = captureRef.current.getBoundingClientRect();
    console.log(bound)
    getScreenshotOfElement(ele, bound["x"], bound["y"], bound["width"], bound["height"])
  };

  function getScreenshotOfElement(
    element,
    posX,
    posY,
    width,
    height
  ) {
    html2canvas(element).then( (canvas) => {
        var context = canvas.getContext("2d");
        var imageData = context.getImageData(posX, posY, width, height).data;
        var outputCanvas = document.createElement("canvas");
        var outputContext = outputCanvas.getContext("2d");
        outputCanvas.width = width;
        outputCanvas.height = height;

        var idata = outputContext.createImageData(width, height);
        idata.data.set(imageData);
        outputContext.putImageData(idata, 0, 0);
        download(outputCanvas.toDataURL());
      });
  }

  const download = (data) => {
    console.log("download:");
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = data;
    a.download = 'capture';
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className={styles.outer}>
      <h1>test</h1>
      <div id="screenshot" className={styles.screenshot} ref={captureRef}>
        <h2>Screenshot me</h2>
        <img src="https://acm-orbit-public-s3-dev.s3.ap-southeast-1.amazonaws.com/avatar/WUN/avatar.png" />
        <p>Test some text</p>
        <button>Click For nothing</button>
      </div>
      <div className={styles.button}>
        <button onClick={captureImageHandler}>Capture screen</button>
      </div>
    </div>
  );
};

export default ImageCapture;
