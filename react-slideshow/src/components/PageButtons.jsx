import { generate } from './Pagination';

const PageButtons = ({
  curPage,
  numPages,
  setActiveFilmIndex,
  setProgress,
}) => {
  const paginationSequence = generate(curPage, numPages);

  return (
    <>
      <div className='pagination'>
        {paginationSequence.map((page, index) => (
          <button
            key={index}
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
export default PageButtons;
