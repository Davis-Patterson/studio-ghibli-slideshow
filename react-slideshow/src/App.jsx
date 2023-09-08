import { useState, useEffect } from 'react';
import './App.css';
import FilmCard from './FilmCard';
import filmData from './film-data.json';
import ghibliCatImg from './assets/ghibli-cat.png';
import ghibliKaonashiImg from './assets/ghibli-kaonashi.png';

function App() {
  const [films, setFilms] = useState(filmData);
  const initialIndexValue = 0;
  const [activeFilmIndex, setActiveFilmIndex] = useState(initialIndexValue);
  const lastFilmIndex = filmData.length - 1;
  const sortedFilms = [...filmData];
  const [timer, setTimer] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // const sortByReleaseDate = (filmData) => {
  //   // need to use the .sort js function to sort by release_date
  //   // => assign to variable, sorted_data = result
  //   // update state to use new sorted list instead of filmData

  //   sortedFilms.sort((a, b) => {
  //     const releaseDateA = parseInt(a.release_date);
  //     const releaseDateB = parseInt(b.release_date);
  //     return releaseDateA - releaseDateB;
  //   });
  //   setFilms(sortedFilms);
  // };

  const autoProgNextFilm = () => {
    if (!isPaused) {
      if (activeFilmIndex < lastFilmIndex) {
        setActiveFilmIndex((index) => index + 1);
      } else {
        setActiveFilmIndex(initialIndexValue);
      }
    }
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      autoProgNextFilm();
    }, 4000);

    setTimer(newTimer);

    return () => {
      clearTimeout(newTimer);
    };
  }, [activeFilmIndex, isPaused]);

  const pauseToggle = () => {
    setIsPaused(!isPaused);

    if (!isPaused) {
      if (timer) {
        clearTimeout(timer);
      }

      const newTimer = setTimeout(() => {
        autoProgNextFilm();
      }, 4000);

      setTimer(newTimer);
    }
  };

  return (
    <>
      <header>
        <div className='ghibliContainer'>
          <div className='ghibliBox'>
            <p className='ghibliJapanese'>スタジオジブリ作品</p>
            <p className='ghibliText'>STUDIO GHIBLI</p>
          </div>
        </div>
        <img className='ghibliCat' src={ghibliCatImg} alt='ghibli-cat'></img>
        <img
          className='ghibliKaonashi'
          src={ghibliKaonashiImg}
          alt='ghibli-kaonashi'
        ></img>
      </header>
      {films.map(
        (film, index) =>
          activeFilmIndex === index && (
            <div key={index}>
              <FilmCard film={film} />
            </div>
          )
      )}
      <div className='buttonBox'>
        <button
          className='sortButton'
          onClick={() => setFilms(sortByReleaseDate)}
        >
          sort
        </button>
        <button
          className='refreshButton'
          onClick={() => setActiveFilmIndex(initialIndexValue)}
          disabled={activeFilmIndex === initialIndexValue}
        >
          ⟳ Refresh
        </button>
        <button className='pauseButton' onClick={pauseToggle}>
          {isPaused ? '⏵︎ Play' : '⏸︎ Pause'}
        </button>
        <button
          className='backButton'
          onClick={() => setActiveFilmIndex(activeFilmIndex - 1)}
          disabled={activeFilmIndex === initialIndexValue}
        >
          &#60; Back
        </button>
        <button
          className='nextButton'
          onClick={() => setActiveFilmIndex(activeFilmIndex + 1)}
          disabled={activeFilmIndex === lastFilmIndex}
        >
          Next &#62;
        </button>
      </div>
    </>
  );
}

export default App;
