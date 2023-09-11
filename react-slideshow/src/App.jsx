import { useState, useEffect } from 'react';
import './App.css';
import Header from 'components/Header';
import FilmCard from 'components/FilmCard';
import ButtonBox from 'components/ButtonBox';
import PageButtons from 'components/PageButtons';
import FavContainer from 'components/FavContainer';
import Footer from 'components/Footer';
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
  const [fade, setFade] = useState('in');
  const lastFilmIndex = films.length - 1;
  const numPages = films.length;
  const curPage = activeFilmIndex;

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
      setFade('out');
      setProgress(0);
      setTimeout(() => {
        if (activeFilmIndex < lastFilmIndex) {
          setActiveFilmIndex((index) => index + 1);
        } else {
          setActiveFilmIndex(initialIndexValue);
        }
        setFade('in');
      }, 200);
    }
  };

  // const autoProgNextFilm = () => {
  //   if (!isPaused) {
  //     if (activeFilmIndex < lastFilmIndex) {
  //       setActiveFilmIndex((index) => index + 1);
  //       setProgress(0);
  //     } else {
  //       setActiveFilmIndex(initialIndexValue);
  //       setProgress(0);
  //     }
  //   }
  // };

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
      {films.map(
        (film, index) =>
          activeFilmIndex === index && (
            <div key={index}>
              <FilmCard
                film={film}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                progress={progress}
                setProgress={setProgress}
                fade={fade}
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
        lastFilmIndex={lastFilmIndex}
        setFilms={setFilms}
      />
      <PageButtons
        curPage={curPage}
        numPages={numPages}
        setActiveFilmIndex={setActiveFilmIndex}
        setProgress={setProgress}
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
