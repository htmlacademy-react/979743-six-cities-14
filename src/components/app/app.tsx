import MainPage from '../../pages/main/main';
import Header from '../header/header';
import { HeaderProps } from '../header/header';

export type AppProps = {
  // здесь будут объекты с данными для ВСЕХ страниц и компонентов
  userInfo: HeaderProps;
};

function App({userInfo}: AppProps): JSX.Element { //деструктуризация выделит те поля AppProps = объекты, которые нужны конкретной странице
  return (
    <div className="page page--gray page--main">
      <Header userInfo = {userInfo} />
      <MainPage />
    </div>
  );
}

export default App;
