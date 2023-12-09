import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import { TUserData } from '../../types/user-data';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserInfo } from '../../store/auth-process/selectors';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const userInfo: TUserData = useAppSelector(getUserInfo);


  const handleLogoutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" onClick={handleLogoutClick}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

}

export default memo(Header);
