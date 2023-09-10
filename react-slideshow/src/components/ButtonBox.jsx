import shortFilmData from 'assets/film-data.json';
import filmData from 'assets/mega-film-data.json';

const ButtonBox = ({
  initialIndexValue,
  isPaused,
  pauseToggle,
  activeFilmIndex,
  setActiveFilmIndex,
  goInputValue,
  setGoInputValue,
  setProgress,
  numPages,
  lastFilmIndex,
  setFilms,
}) => {
  const sortedFilms = [...filmData];

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

  return (
    <>
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
    </>
  );
};

export default ButtonBox;
