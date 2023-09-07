import filmData from './film-data.json';

const Slideshow = ({ filmIndex, setFilmIndex }) => {
const film = filmData[filmIndex]

  return (
    <div>
      {/* {filmData.map((film, index) => ( */}
        <>
          <div className="container">
            <div className="fullBox">
              {/* <div key={index} className="basicBox"> */}
                <p className="filmTitle">{film.title}</p>
                <p className="filmJapanese">{film.original_title}</p>
                <p className="filmDate">{film.release_date}</p>
                <p className="filmDesc">{film.description}</p>
                <img src={film.image} alt={film.title} className="filmImg"></img>
              </div>
            </div>
          {/* </div> */}
        </>
      {/* ))} */}
    </div>
  )
}

export default Slideshow
