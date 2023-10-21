import MainPage from '../../pages/main/main';
import { MainProps } from '../../pages/main/main';

function App({userInfo}: MainProps): JSX.Element { //деструктуризация выделит те поля AppProps = объекты, которые нужны конкретной странице
  return (
    <MainPage userInfo = {userInfo} />
  );
}

export default App;
