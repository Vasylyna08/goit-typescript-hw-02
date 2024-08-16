import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
