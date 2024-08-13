import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
