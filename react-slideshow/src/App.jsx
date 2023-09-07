import { useState } from 'react';
import './App.css';
import Slideshow from './slideshow';


function App() {
  const [filmIndex, setFilmIndex] = useState(0);
    return (
      <>
        <h1>Slideshow!</h1>
        <div>
          <Slideshow filmIndex={filmIndex} setFilmIndex={setFilmIndex}/>
        </div>
      </>
    );
  }

export default App
