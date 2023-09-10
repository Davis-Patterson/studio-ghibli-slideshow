import { useState } from 'react';
import Progress from 'components/Progress';
import Checkboxes from 'components/Checkboxes';

const FilmCard = ({ film, toggleFavorite, favorites, progress }) => {
  const [isFilmTitle, setIsFilmTitle] = useState(true);
  const [isFilmBan, setIsFilmBan] = useState(true);
  const [isFilmImg, setIsFilmImg] = useState(true);
  const [isFilmJa, setIsFilmJa] = useState(true);
  const [isFilmDate, setIsFilmDate] = useState(true);
  const [isFilmDir, setIsFilmDir] = useState(true);
  const [isFilmProd, setIsFilmProd] = useState(true);
  const [isFilmDesc, setIsFilmDesc] = useState(true);
  const [isFilmDur, setIsFilmDur] = useState(true);
  const [isFilmRat, setIsFilmRat] = useState(true);
  const [isFilmUrl, setIsFilmUrl] = useState(true);

  const isFavorite = favorites.some(
    (favoriteFilm) => favoriteFilm.title === film.title
  );

  return (
    <>
      <div className='container'>
        <div className='slideContainer'>
          {isFilmTitle ? <h2 className='filmTitle'>{film.title}</h2> : null}
          <div className='infoBox'>
            {isFilmBan ? (
              <div className='shadow'>
                <img
                  src={film.movie_banner}
                  alt={film.title}
                  className='filmBanner'
                ></img>
              </div>
            ) : null}
            <div className='favToggle' onClick={() => toggleFavorite(film)}>
              {isFavorite ? '♥' : '♡'}
            </div>
            {isFilmImg ? (
              <div className='imgBox'>
                <img
                  src={film.image}
                  alt={film.title}
                  className='filmImg'
                ></img>
              </div>
            ) : null}
            <div className='detailBox'>
              {isFilmJa ? (
                <p className='filmJapanese'>{film.original_title}</p>
              ) : null}
              {isFilmJa ? (
                <p className='titleRomanised'>
                  "{film.original_title_romanised}"
                </p>
              ) : null}
              {isFilmDate ? (
                <p className='filmDate'>{film.release_date}</p>
              ) : null}
              <div className='directorContainer'>
                {isFilmDir ? (
                  <div className='directorBox'>
                    <p className='filmDirector'>
                      <strong>Director:</strong> {film.director}
                    </p>
                  </div>
                ) : null}
                {isFilmProd ? (
                  <div className='producerBox'>
                    <p className='filmProducer'>
                      <strong>Producer:</strong> {film.producer}
                    </p>
                  </div>
                ) : null}
              </div>
              {isFilmDesc ? (
                <p className='filmDesc'>{film.description}</p>
              ) : null}
              <div className='extraInfoContainer'>
                <div className='extraInfoBox'>
                  {isFilmDur ? (
                    <p className='filmTime'>⏳ {film.running_time} mins</p>
                  ) : null}
                  {isFilmRat ? (
                    <p className='rtScore'>🍅 {film.rt_score}%</p>
                  ) : null}
                </div>
              </div>
              {isFilmUrl ? (
                <div className='urlBox'>
                  <a className='filmUrl' href={film.url} alt={film.title}>
                    Click to see film page
                  </a>
                </div>
              ) : null}
              <Progress progress={progress} />
            </div>
          </div>
          <Checkboxes
            isFilmTitle={isFilmTitle}
            setIsFilmTitle={setIsFilmTitle}
            isFilmBan={isFilmBan}
            setIsFilmBan={setIsFilmBan}
            isFilmImg={isFilmImg}
            setIsFilmImg={setIsFilmImg}
            isFilmJa={isFilmJa}
            setIsFilmJa={setIsFilmJa}
            isFilmDate={isFilmDate}
            setIsFilmDate={setIsFilmDate}
            isFilmDir={isFilmDir}
            setIsFilmDir={setIsFilmDir}
            isFilmProd={isFilmProd}
            setIsFilmProd={setIsFilmProd}
            isFilmDesc={isFilmDesc}
            setIsFilmDesc={setIsFilmDesc}
            isFilmDur={isFilmDur}
            setIsFilmDur={setIsFilmDur}
            isFilmRat={isFilmRat}
            setIsFilmRat={setIsFilmRat}
            isFilmUrl={isFilmUrl}
            setIsFilmUrl={setIsFilmUrl}
          />
        </div>
      </div>
    </>
  );
};

export default FilmCard;
