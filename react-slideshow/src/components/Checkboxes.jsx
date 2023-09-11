const Checkboxes = ({
  handleCheckboxChange,
  isFilmTitle,
  setIsFilmTitle,
  isFilmBan,
  setIsFilmBan,
  isFilmImg,
  setIsFilmImg,
  isFilmJa,
  setIsFilmJa,
  isFilmDate,
  setIsFilmDate,
  isFilmDir,
  setIsFilmDir,
  isFilmProd,
  setIsFilmProd,
  isFilmDesc,
  setIsFilmDesc,
  isFilmDur,
  setIsFilmDur,
  isFilmRat,
  setIsFilmRat,
  isFilmUrl,
  setIsFilmUrl,
}) => {
  return (
    <>
      <div className='filterContainer'>
        <div className='filterBox'>
          <label className='checkText'>
            Title
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmTitle}
              onChange={() => setIsFilmTitle(!isFilmTitle)}
            />
          </label>
          <label className='checkText'>
            Banner
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmBan}
              onChange={() => setIsFilmBan(!isFilmBan)}
            />
          </label>
          <label className='checkText'>
            Image
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmImg}
              onChange={() => setIsFilmImg(!isFilmImg)}
            />
          </label>
          <label className='checkText'>
            日本語
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmJa}
              onChange={() => setIsFilmJa(!isFilmJa)}
            />
          </label>
          <label className='checkText'>
            Date
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDate}
              onChange={() => setIsFilmDate(!isFilmDate)}
            />
          </label>
          <label className='checkText'>
            Dir.
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDir}
              onChange={() => setIsFilmDir(!isFilmDir)}
            />
          </label>
          <label className='checkText'>
            Prod.
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmProd}
              onChange={() => setIsFilmProd(!isFilmProd)}
            />
          </label>
          <label className='checkText'>
            Desc.
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDesc}
              onChange={() => setIsFilmDesc(!isFilmDesc)}
            />
          </label>
          <label className='checkText'>
            Dur.
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDur}
              onChange={() => setIsFilmDur(!isFilmDur)}
            />
          </label>
          <label className='checkText'>
            Rating
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmRat}
              onChange={() => setIsFilmRat(!isFilmRat)}
            />
          </label>
          <label className='checkText'>
            Url
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmUrl}
              onChange={() => setIsFilmUrl(!isFilmUrl)}
            />
          </label>
        </div>
      </div>
    </>
  );
};
export default Checkboxes;
