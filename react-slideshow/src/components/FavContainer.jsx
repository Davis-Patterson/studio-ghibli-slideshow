const FavContainer = ({ favorites, handleFavoriteClick }) => {
  return (
    <>
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
    </>
  );
};
export default FavContainer;
