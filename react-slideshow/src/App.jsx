import { useState, useEffect } from 'react';
import './App.css';
import Header from 'components/Header';
import FilmCard from 'components/FilmCard';
import ButtonBox from 'components/ButtonBox';
import FavContainer from 'components/FavContainer';
import Footer from 'components/Footer';
import { generate } from 'components/Pagination';
import shortFilmData from 'assets/film-data.json';
import filmData from 'assets/mega-film-data.json';

function App() {
  const initialIndexValue = 0;
  const desiredSeconds = 3;
  const [films, setFilms] = useState(filmData);
  const [activeFilmIndex, setActiveFilmIndex] = useState(initialIndexValue);
  const [isPaused, setIsPaused] = useState(false);
  const [goInputValue, setGoInputValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [progress, setProgress] = useState(0);
  const lastFilmIndex = filmData.length - 1;
  const sortedFilms = [...filmData];
  const numPages = films.length;
  const curPage = activeFilmIndex;
  const paginationSequence = generate(curPage, numPages);

  const autoProgTime = desiredSeconds * 10;

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleFavoriteClick = (title) => {
    const favIndex = films.findIndex((film) => film.title === title);
    setActiveFilmIndex(favIndex);
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'default') {
      setFilms(filmData);
    } else if (selectedValue === 'short') {
      setFilms(shortFilmData);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'title-asc') {
      sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'director-asc') {
      sortedFilms.sort((a, b) => a.director.localeCompare(b.director));
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'producer-asc') {
      sortedFilms.sort((a, b) => a.producer.localeCompare(b.producer));
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'title-desc') {
      sortedFilms.sort((a, b) => b.title.localeCompare(a.title));
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'date-asc') {
      sortedFilms.sort((a, b) => a.release_date - b.release_date);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'date-desc') {
      sortedFilms.sort((a, b) => b.release_date - a.release_date);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'time-asc') {
      sortedFilms.sort((a, b) => a.running_time - b.running_time);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'time-desc') {
      sortedFilms.sort((a, b) => b.running_time - a.running_time);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'score-asc') {
      sortedFilms.sort((a, b) => a.rt_score - b.rt_score);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    } else if (selectedValue === 'score-desc') {
      sortedFilms.sort((a, b) => b.rt_score - a.rt_score);
      setFilms(sortedFilms);
      setActiveFilmIndex(0);
    }
  };

  const toggleFavorite = (film) => {
    const updatedFavorites = [...favorites];
    const filmIndex = updatedFavorites.findIndex(
      (favoriteFilm) => favoriteFilm.title === film.title
    );

    if (filmIndex !== -1) {
      updatedFavorites.splice(filmIndex, 1);
    } else {
      updatedFavorites.push(film);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const autoProgNextFilm = () => {
    if (!isPaused) {
      if (activeFilmIndex < lastFilmIndex) {
        setActiveFilmIndex((index) => index + 1);
        setProgress(0);
      } else {
        setActiveFilmIndex(initialIndexValue);
        setProgress(0);
      }
    }
  };

  let prevTriggerTime = performance.now();
  // console.log('Time set');

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (!isPaused && prevProgress < 100) {
          return prevProgress + 1;
        } else {
          return prevProgress;
        }
      });
    }, autoProgTime);

    if (progress === 100 && !isPaused) {
      const curTriggerTime = performance.now();
      const triggered = curTriggerTime - prevTriggerTime;
      console.log(`Triggered: ${triggered.toFixed(2)}s`);
      prevTriggerTime = curTriggerTime;
      autoProgNextFilm();
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [isPaused, autoProgNextFilm]);

  const pauseToggle = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <Header />
      {/* {console.log('progress, ', progress)} */}
      {films.map(
        (film, index) =>
          activeFilmIndex === index && (
            <div key={index}>
              <FilmCard
                film={film}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                setProgress={setProgress}
                progress={progress}
              />
            </div>
          )
      )}
      <ButtonBox
        initialIndexValue={initialIndexValue}
        isPaused={isPaused}
        pauseToggle={pauseToggle}
        activeFilmIndex={activeFilmIndex}
        setActiveFilmIndex={setActiveFilmIndex}
        goInputValue={goInputValue}
        setGoInputValue={setGoInputValue}
        setProgress={setProgress}
        numPages={numPages}
        curPage={curPage}
        lastFilmIndex={lastFilmIndex}
        paginationSequence={paginationSequence}
        handleChange={handleChange}
      />
      <FavContainer
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
      />
      <Footer />
    </>
  );
}

export default App;
