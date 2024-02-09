import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import { IMAGES } from "./Images"
import AnimatedRouter from './components/AnimatedRouter';

const App: React.FC = () => {
type ImageType = {
  url: string; 
  alt?: string;
};
    const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = (image: ImageType) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
        resolve(image.url)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      {imgsLoaded ? (
              <Router>
      <div className="App app">
        <AnimatedRouter />
        <Menu />
      </div>
    </Router>
        ) : (
          <h2 style={{textAlign: 'center'}}>Loading images...</h2>
        )}
    </>

  );
};

export default App;
