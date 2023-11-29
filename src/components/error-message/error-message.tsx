import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.serverError);

  if(!error) {
    return null;
  }

  return <div className='error-container'><div className='error-message'>{error}</div></div>;
}

export default ErrorMessage;
