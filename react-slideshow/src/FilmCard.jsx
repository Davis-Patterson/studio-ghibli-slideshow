const FilmCard = ({ film }) => {
  return (
    <div className="container">
        <div className="slideContainer">
          <h2 className="filmTitle">{film.title}</h2>
          <div className="infoBox">
            <div className="imgBox">
              <img src={film.image} alt={film.title} className="filmImg"></img>
            </div>
            <div className="detailBox">
              <p className="filmJapanese">{film.original_title}</p>
              <p className="filmDate">{film.release_date}</p>
              <p className="filmDesc">{film.description}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FilmCard
