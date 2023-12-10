import {useAppSelector} from '../../hooks';
import { getServerError } from '../../store/errors-process/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getServerError);

  if(!error) {
    return null;
  }

  return <div className='error-container'><div className='error-message'>{error}</div></div>;
}

export default ErrorMessage;
