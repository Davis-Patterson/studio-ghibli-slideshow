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
        {paginationSequence.map((page, index) =>
          page !== '...' ? (
            <button
              key={index}
              className={
                page === curPage + 1 ? 'page-item-active' : 'page-item'
              }
              onClick={() => {
                setActiveFilmIndex(page - 1);
                setProgress(0);
              }}
              disabled={page === '...'}
            >
              {page}
            </button>
          ) : (
            <div>{page}</div>
          )
        )}
      </div>
    </>
  );
};
export default PageButtons;

// write a function that handles the click on page numbers, determines if it's a num or '...'
// missing intermidiary function
