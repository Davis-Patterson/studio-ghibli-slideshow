import vignette from 'assets/vignette.png';

const FilmCard = ({ film }) => {
  return (
    <div className='container'>
      <div className='slideContainer'>
        <h2 className='filmTitle'>{film.title}</h2>
        <div className='infoBox'>
          <img
            src={film.movie_banner}
            alt={film.title}
            className='filmBanner'
          ></img>
          <img className='bannerVignette' src={vignette}></img>
          <div className='imgBox'>
            <img src={film.image} alt={film.title} className='filmImg'></img>
          </div>
          <div className='detailBox'>
            <p className='filmJapanese'>{film.original_title}</p>
            <p className='titleRomanised'>"{film.original_title_romanised}"</p>
            <p className='filmDate'>{film.release_date}</p>
            <p className='filmDirector'>{film.director}</p>
            <p className='filmDesc'>{film.description}</p>
            <p className='filmTime'>Duration: {film.running_time} minutes</p>
            <p className='rtScore'>🍅 {film.rt_score}</p>
            <a className='filmUrl' href={film.url} alt={film.title}>
              Click to see more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
