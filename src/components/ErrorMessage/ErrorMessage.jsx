import c from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => <div className={c.error}>{children}</div>;
export default ErrorMessage;
