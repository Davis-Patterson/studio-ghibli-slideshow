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
  curPage,
  lastFilmIndex,
  paginationSequence,
  handleChange,
}) => {
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
    </>
  );
};

export default ButtonBox;
