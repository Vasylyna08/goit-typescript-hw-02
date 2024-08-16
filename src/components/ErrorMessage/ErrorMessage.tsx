import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Oops, something went wrong, please reload the page!😢',
}) => {
  return <p className={css.errorMessage}>{message}</p>;
};

export default ErrorMessage;
