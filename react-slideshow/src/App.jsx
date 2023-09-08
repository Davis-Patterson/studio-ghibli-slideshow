import { useState } from 'react';
import './App.css';
import FilmCard from './FilmCard';
import filmData from './film-data.json';
import ghibliCatImg from './assets/ghibli-cat.png'
import ghibliKaonashiImg from './assets/ghibli-kaonashi.png'

function App() {
  const [films, setFilms] = useState(filmData);
  const initialValue = 0
  const [activeFilmIndex, setActiveFilmIndex] = useState(initialValue);
  const lastFilmIndex = filmData.length - 1


  const sortByReleaseDate = (filmData) => {
    // need to use the .sort js function to sort by release_date 
    // => assign to variable, sorted_data = result
    // update state to use new sorted list instead of filmData
  }

    return (
      <>
        <header>
          <div className="ghibliContainer">
            <div className="ghibliBox">
              <h1 className="ghibliText">Studio Ghibli</h1>
              <p className="ghibliJapanese">株式会社スタジオジブリ</p>
            </div>
          </div>
          <img className="ghibliCat" src={ghibliCatImg} alt="ghibli-cat"></img>
          <img className="ghibliKaonashi" src={ghibliKaonashiImg} alt="ghibli-kaonashi"></img>
        </header>
        {films.map((film, index) => (
          activeFilmIndex === index &&
            <div key={index}>
              <FilmCard film={film}/>
            </div>
          )
        )}
        <div className='buttonBox'>
          <button className="refreshButton" onClick={() => setActiveFilmIndex(initialValue)} disabled={activeFilmIndex === initialValue}>⟳ Refresh</button>
          <button className="backButton" onClick={() => setActiveFilmIndex(activeFilmIndex - 1)} disabled={activeFilmIndex === initialValue}>&#60; Back</button>
          <button className="nextButton" onClick={() => setActiveFilmIndex(activeFilmIndex + 1)} disabled={activeFilmIndex === lastFilmIndex}>Next &#62;</button>
        </div>
      </>
    );
  }

export default App
