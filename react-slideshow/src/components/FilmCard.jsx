import { useState } from 'react';
import ProgressBar from 'react-animated-progress-bar';
// import Progress from 'components/Progress';
import PropTypes from 'prop-types';

const FilmCard = ({
  film,
  toggleFavorite,
  favorites,
  setProgress,
  progress,
}) => {
  const [isFilmJapanese, setIsFilmJapanese] = useState(true);
  const isFavorite = favorites.some(
    (favoriteFilm) => favoriteFilm.title === film.title
  );

  ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
  };

  return (
    <>
      <div className='filterContainer'></div>
      <div className='container'>
        <div className='slideContainer'>
          <h2 className='filmTitle'>{film.title}</h2>
          <div className='infoBox'>
            <div className='shadow'>
              <img
                src={film.movie_banner}
                alt={film.title}
                className='filmBanner'
              ></img>
            </div>
            <div className='favToggle' onClick={() => toggleFavorite(film)}>
              {isFavorite ? '♥' : '♡'}
            </div>
            <div className='imgBox'>
              <img src={film.image} alt={film.title} className='filmImg'></img>
            </div>
            <div className='detailBox'>
              <p className='filmJapanese'>{film.original_title}</p>
              <p className='titleRomanised'>
                "{film.original_title_romanised}"
              </p>
              <p className='filmDate'>{film.release_date}</p>
              <div className='directorContainer'>
                <div className='directorBox'>
                  <p className='filmDirector'>
                    <strong>Director:</strong> {film.director}
                  </p>
                </div>
                <div className='producerBox'>
                  <p className='filmProducer'>
                    <strong>Producer:</strong> {film.producer}
                  </p>
                </div>
              </div>
              <p className='filmDesc'>{film.description}</p>
              <div className='extraInfoContainer'>
                <div className='extraInfoBox'>
                  <p className='filmTime'>⏳ {film.running_time} mins</p>
                  <p className='rtScore'>🍅 {film.rt_score}%</p>
                </div>
              </div>
              <div className='urlBox'>
                <a className='filmUrl' href={film.url} alt={film.title}>
                  Click to see film page
                </a>
              </div>
              {/* <Progress progress={progress} /> */}
              <div className='progressContainer' onClick={() => setProgress(0)}>
                <ProgressBar
                  className='progress-bar'
                  width='60'
                  trackWidth='50'
                  percentage={progress}
                  defColor={{
                    fair: 'white',
                    good: 'white',
                    excellent: 'white',
                    poor: 'white',
                  }}
                  fontColor='white'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
