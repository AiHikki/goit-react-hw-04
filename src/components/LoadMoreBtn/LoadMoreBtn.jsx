import c from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children, disabled }) => (
  <button onClick={onClick} disabled={disabled} className={c.loadBtn}>
    {children}
  </button>
);

export default LoadMoreBtn;
