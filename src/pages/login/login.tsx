import { Helmet } from 'react-helmet-async';
import {FormEvent, useEffect, useMemo, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/auth-process/selectors';
import { AuthorizationStatus, Cities } from '../../const';
import Spinner from '../../components/spiner/spinner';
import { getRandomArrayItem } from '../../util';
import { cityChange } from '../../store/action';

export const PASSWORD_PATTERN = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = useMemo(() => getRandomArrayItem(Cities), []);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate('/');
    }
  },[authorizationStatus, navigate]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<Spinner />);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (login !== null && password !== null) {
      if (password.match(PASSWORD_PATTERN) && login.match(EMAIL_PATTERN)) {
        dispatch(loginAction({
          email: login,
          password: password
        }))
          .then((serverRusult) => {
            if (serverRusult.type === 'user/login/fulfilled') {
              navigate(-1);
            }
          });
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <Helmet>
        <title>6 гороодов. Заходи...</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={login ?? ''}
                  onChange={(evt) => setLogin(evt.target.value)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={false}
                  id="auth-name"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={password ?? ''}
                  onChange={(evt) => setPassword(evt.target.value)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={false}
                  id="auth-password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="/"
                onClick={() => {
                  dispatch(cityChange(randomCity));
                }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
