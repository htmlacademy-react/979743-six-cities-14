import MainPage from '../../pages/main/main';
import { HeaderProps } from '../header/header';

type AppProps = {
  // сюда буду складывать все объекты с данными для всех страниц и компонентов
  userInfo: HeaderProps;
}

function App({userInfo}: AppProps): JSX.Element { //деструктуризация выделит те поля AppProps = объекты, которые нужны конкретной странице
  return (
    <MainPage userInfo = {userInfo} />
  );
}

export default App;
