import { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import "@tensorflow/tfjs"; // TensorFlow.js
import LoadingSpinner from "../components/ui/LoadingSpinner.tsx";

const AIAnalysis = () => {
  const [model, setModel] = useState(null);
  const [webcam, setWebcam] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [diagnosis, setDiagnosis] = useState("Loading...");
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);

  const URL = "./tm-my-image-model/";

  useEffect(() => {
    async function initModel() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // Load the model and metadata
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());

      // Setup the webcam
      const flip = true;
      const webcamInstance = new tmImage.Webcam(200, 200, flip);
      await webcamInstance.setup();
      await webcamInstance.play();
      setWebcam(webcamInstance);

      // Append the webcam to the DOM
      if (webcamRef.current) {
        webcamRef.current.appendChild(webcamInstance.canvas);
      }

      // Add caption for predictions
      const labelContainer = labelContainerRef.current;
      let caption = document.createElement("div");
      caption.style.fontSize = "20px";
      caption.style.fontFamily = "Arial";
      caption.style.color = "#07172F";
      labelContainer.appendChild(caption);

      // for (let i = 0; i < loadedModel.getTotalClasses(); i++) {
      //   labelContainer.appendChild(document.createElement("div"));
      // }

      // Start predicting
      async function loop() {
        webcamInstance.update();
        await predict(loadedModel, webcamInstance);
        requestAnimationFrame(loop);
      }
      loop();
    }

    initModel();
  }, []);

  async function predict(model, webcamInstance) {
    const prediction = await model.predict(webcamInstance.canvas);
    const labelContainer = labelContainerRef.current;
    // for (let i = 0; i < prediction.length; i++) {
    //   labelContainer.childNodes[i + 1].innerHTML =
    //     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    // }
  }

  async function revealDiagnosis() {
    if (!model || !webcam) return;

    const prediction = await model.predict(webcam.canvas);
    let diagName = "";
    let diagProb = 0;

    for (let i = 0; i < prediction.length; i++) {
      if (prediction[i].probability > diagProb) {
        diagName = prediction[i].className;
        diagProb = prediction[i].probability;
      }
    }

    setDiagnosis(diagName);
  }

  // Trigger the diagnosis reveal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      revealDiagnosis();
    }, 5000);
    return () => clearTimeout(timer);
  }, [model, webcam]);

  return (
    <div>
      <div className="bg-[url(aiface.jpg)] bg-no-repeat bg-cover bg-top w-screen h-64 flex justify-center">
        <h1 className="text-6xl font-resort-sans py-24 ">AI SKIN DIAGNOSIS</h1>
      </div>
      <div className="flex justify-center">
        <p className="mx-20 mt-16 mb-16 font-bold text-[#747474] text-2xl text-center max-w-[770px]">
          Please center your face in the webcam and make sure it takes up the
          majority of the webcam
        </p>
      </div>
      <div className="flex justify-center">
        <div className="webcam-container" ref={webcamRef}></div>
      </div>
      <div style={{ textAlign: "center" }} ref={labelContainerRef}></div>
      <p className="mt-10  mb-10 font-resort-sans font-black text-4xl text-center text-[#517783]">
        DIAGNOSIS:
      </p>
      <div className="text-center mb-20 font-bold text-[#747474] text-2xl">
        {diagnosis == "Loading..." && <LoadingSpinner />}

        {diagnosis != "Loading..." && diagnosis != "Bags" && diagnosis}
        {diagnosis == "Bags" && "Eye Bags"}
      </div>
    </div>
  );
};

export default AIAnalysis;
