import React, { useRef, useEffect } from 'react';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    const handleSuccess = (stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    const handleError = (error) => {
      console.error('Erreur d\'accès à la webcam :', error);
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError);
  }, []);

  return (
    <div className="App">
      <h1>Affichage de la webcam en temps réel</h1>
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  );
}

export default App;
