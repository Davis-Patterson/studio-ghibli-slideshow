import { useState, useEffect } from 'react';
import './App.css';
import FilmCard from 'components/FilmCard';
import { generate } from 'components/Pagination';
import shortFilmData from 'assets/film-data.json';
import filmData from 'assets/mega-film-data.json';
import ghibliCatImg from 'assets/ghibli-cat.png';
import ghibliKaonashiImg from 'assets/ghibli-kaonashi.png';
import ghibliSootImg from 'assets/ghibli-soot.png';

function App() {
  const initialIndexValue = 0;
  const autoProgTime = 30;
  const [films, setFilms] = useState(filmData);
  const [activeFilmIndex, setActiveFilmIndex] = useState(initialIndexValue);
  const [isPaused, setIsPaused] = useState(false);
  const [goInputValue, setGoInputValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isAutoProgressing, setIsAutoProgressing] = useState(true);
  const lastFilmIndex = filmData.length - 1;
  const sortedFilms = [...filmData];
  const numPages = films.length;
  const curPage = activeFilmIndex;
  const paginationSequence = generate(curPage, numPages);

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
    if (isAutoProgressing) {
      if (activeFilmIndex < lastFilmIndex) {
        setActiveFilmIndex((index) => index + 1);
        setProgress(0);
      } else {
        setActiveFilmIndex(initialIndexValue);
        setProgress(0);
      }
    }
  };

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

    if (progress === 100 && isAutoProgressing) {
      autoProgNextFilm();
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [isPaused, progress, isAutoProgressing, autoProgNextFilm]);

  const pauseToggle = () => {
    setIsPaused(!isPaused);
    setIsAutoProgressing(!isAutoProgressing);
  };

  // const autoProgNextFilm = () => {
  //   if (!isPaused) {
  //     if (activeFilmIndex < lastFilmIndex) {
  //       setActiveFilmIndex((index) => index + 1);
  //     } else {
  //       setActiveFilmIndex(initialIndexValue);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }

  //   setProgress(0);

  //   const newTimer = setTimeout(() => {
  //     autoProgNextFilm();
  //   }, 4000);

  //   const progressTimer = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (isPaused || prevProgress >= 100) {
  //         return prevProgress;
  //       } else {
  //         clearInterval(progressTimer);
  //         return prevProgress + 1;
  //       }
  //     });
  //   }, 40);

  //   setTimer(newTimer);

  //   return () => {
  //     clearTimeout(newTimer);
  //     clearInterval(progressTimer);
  //   };
  // }, [activeFilmIndex, isPaused]);

  // const pauseToggle = () => {
  //   setIsPaused(!isPaused);

  //   if (!isPaused) {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }

  //     const newTimer = setTimeout(() => {
  //       autoProgNextFilm();
  //     }, 4000);

  //     setTimer(newTimer);
  //   }
  // };

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
      {console.log('progress: ', progress)}
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
      <div className='buttonBox'>
        <select onChange={(e) => handleChange(e)} required>
          <option value='default'>= Sort</option>
          <option value='short'>= Short</option>
          <option value='title-asc'>Title ▲</option>
          <option value='title-desc'>Title ▼</option>
          <option value='director-asc'>Director</option>
          <option value='producer-asc'>Producer</option>
          <option value='date-asc'>Date ▲</option>
          <option value='date-desc'>Date ▼</option>
          <option value='time-asc'>Time ▲</option>
          <option value='time-desc'>Time ▼</option>
          <option value='score-asc'>Score ▲</option>
          <option value='score-desc'>Score ▼</option>
        </select>
        <button className='pauseButton' onClick={pauseToggle}>
          {isPaused ? '⏵︎ Play' : '⏸︎ Pause'}
        </button>
        <button
          className='refreshButton'
          onClick={() => {
            setActiveFilmIndex(initialIndexValue);
            setProgress(0);
          }}
          disabled={activeFilmIndex === initialIndexValue}
        >
          ⟳ Refresh
        </button>
        <button
          className='backButton'
          onClick={() => {
            setActiveFilmIndex(activeFilmIndex - 1);
            setProgress(0);
          }}
          disabled={activeFilmIndex === initialIndexValue}
        >
          &#60; Back
        </button>
        <input
          type='number'
          className='goInput'
          name='Go'
          min='1'
          max={numPages}
          value={goInputValue}
          onChange={(e) => {
            const inputValue = parseInt(e.target.value, 10);
            setGoInputValue(e.target.value);
            if (
              !isNaN(inputValue) &&
              inputValue >= 1 &&
              inputValue <= numPages
            ) {
              setActiveFilmIndex(inputValue - 1);
              setProgress(0);
            } else {
              alert('Please enter a valid page number');
            }
          }}
          placeholder='0'
        />
        <button
          className='nextButton'
          onClick={() => {
            setActiveFilmIndex(activeFilmIndex + 1);
            setProgress(0);
          }}
          disabled={activeFilmIndex === lastFilmIndex}
        >
          Next &#62;
        </button>
      </div>
      <div className='pagination'>
        {paginationSequence.map((page, index) => (
          <button
            key={index}
            // className='page-item'
            className={page === curPage + 1 ? 'page-item-active' : 'page-item'}
            onClick={() => {
              if (page !== '...') {
                setActiveFilmIndex(page - 1);
                setProgress(0);
              }
            }}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
      <div className='favContainer'>
        <p className='yourFavs'>FAVORITES</p>
        <p className='yourJapanese'>お気に入り</p>
        <div className='favFilmList'>
          {favorites.map((favorite, index) => (
            <div
              className='favFilmContainer'
              key={index}
              onClick={() => handleFavoriteClick(favorite.title)}
            >
              <div className='favFilmBox'>
                <img
                  src={favorite.image}
                  alt={favorite.title}
                  className='favImg'
                />
              </div>
              <div className='favFilmInfo'>
                <div className='favFilmInfoBox'>
                  <p className='favTitle'>{favorite.title}</p>
                  <p className='favJapanese'>{favorite.original_title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='footer'>
        <a
          className='ghibliContactUrl'
          href='https://studioghiblimovies.com/contact-us/'
          alt='ghibli-contact'
        >
          Contact Us
        </a>
        <p className='ghibliContact'>info@ghiblicollection.com</p>
        <p className='ghibliFooter'>
          © <strong>Studio Ghibli</strong>, Inc.
        </p>
        <p className='allRights'>All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
