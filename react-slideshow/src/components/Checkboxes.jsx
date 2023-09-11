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
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmTitle}
              onChange={() => setIsFilmTitle(!isFilmTitle)}
            />
            Title
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmBan}
              onChange={() => setIsFilmBan(!isFilmBan)}
            />
            Banner
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmImg}
              onChange={() => setIsFilmImg(!isFilmImg)}
            />
            Image
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmJa}
              onChange={() => setIsFilmJa(!isFilmJa)}
            />
            日本語
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDate}
              onChange={() => setIsFilmDate(!isFilmDate)}
            />
            Date
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDir}
              onChange={() => setIsFilmDir(!isFilmDir)}
            />
            Dir.
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmProd}
              onChange={() => setIsFilmProd(!isFilmProd)}
            />
            Prod.
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDesc}
              onChange={() => setIsFilmDesc(!isFilmDesc)}
            />
            Desc.
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmDur}
              onChange={() => setIsFilmDur(!isFilmDur)}
            />
            Len.
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmRat}
              onChange={() => setIsFilmRat(!isFilmRat)}
            />
            Rating
          </label>
          <label className='checkText'>
            <input
              className='checkBox'
              type='checkbox'
              checked={isFilmUrl}
              onChange={() => setIsFilmUrl(!isFilmUrl)}
            />
            Url
          </label>
        </div>
      </div>
    </>
  );
};
export default Checkboxes;
