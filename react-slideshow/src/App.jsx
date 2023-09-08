import { useState, useEffect } from 'react';
import './App.css';
import FilmCard from './FilmCard';
import filmData from './film-data.json';
import ghibliCatImg from './assets/ghibli-cat.png';
import ghibliKaonashiImg from './assets/ghibli-kaonashi.png';
import ghibliSootImg from './assets/ghibli-soot.png';

function App() {
  const [films, setFilms] = useState(filmData);
  const initialIndexValue = 0;
  const [activeFilmIndex, setActiveFilmIndex] = useState(initialIndexValue);
  const lastFilmIndex = filmData.length - 1;
  const sortedFilms = [...filmData];
  const [timer, setTimer] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleChange = (inputType, e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'title-asc') {
      sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
      setFilms(sortedFilms);
    } else if (selectedValue === 'title-desc') {
      sortedFilms.sort((a, b) => b.title.localeCompare(a.title));
      setFilms(sortedFilms);
    } else if (selectedValue === 'date-asc') {
      sortedFilms.sort((a, b) => a.release_date - b.release_date);
      setFilms(sortedFilms);
    } else if (selectedValue === 'date-desc') {
      sortedFilms.sort((a, b) => b.release_date - a.release_date);
      setFilms(sortedFilms);
    }
  };

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
        <img className='ghibliSoot' src={ghibliSootImg} alt='ghibli-soot'></img>
        <img
          className='ghibliSoot2'
          src={ghibliSootImg}
          alt='ghibli-soot-2'
        ></img>
        <img className='ghibliCat' src={ghibliCatImg} alt='ghibli-cat'></img>
        <img
          className='ghibliKaonashi'
          src={ghibliKaonashiImg}
          alt='ghibli-kaonashi'
        ></img>
        <img
          className='ghibliSoot3'
          src={ghibliSootImg}
          alt='ghibli-soot-3'
        ></img>
        <img
          className='ghibliSoot4'
          src={ghibliSootImg}
          alt='ghibli-soot-4'
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
        <select onChange={(e) => handleChange('color', e)} required>
          <option>= Sort</option>
          <option value='title-asc'>Title ▲</option>
          <option value='title-desc'>Title ▼</option>
          <option value='date-asc'>Date ▲</option>
          <option value='date-desc'>Date ▼</option>
        </select>
        <button className='pauseButton' onClick={pauseToggle}>
          {isPaused ? '⏵︎ Play' : '⏸︎ Pause'}
        </button>
        <button
          className='refreshButton'
          onClick={() => setActiveFilmIndex(initialIndexValue)}
          disabled={activeFilmIndex === initialIndexValue}
        >
          ⟳ Refresh
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
