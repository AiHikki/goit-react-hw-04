import c from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className={c.loadBtn}>
    Load More
  </button>
);

export default LoadMoreBtn;
