import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load models
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  // Start webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera error:", err));
  };

  useEffect(() => {
    let interval;
    loadModels().then(() => {
      startVideo();

      interval = setInterval(async () => {
        if (!videoRef.current) return;

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();

        const canvas = canvasRef.current;
        const video = videoRef.current;

        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        faceapi.matchDimensions(canvas, {
          width: video.videoWidth,
          height: video.videoHeight,
        });

        const resized = faceapi.resizeResults(detections, {
          width: video.videoWidth,
          height: video.videoHeight,
        });

        faceapi.draw.drawDetections(canvas, resized);
        faceapi.draw.drawFaceExpressions(canvas, resized);
      }, 150);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "500px" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="500"
        height="350"
        style={{ borderRadius: "10px" }}
      />
      <canvas
        ref={canvasRef}
        width="500"
        height="350"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
