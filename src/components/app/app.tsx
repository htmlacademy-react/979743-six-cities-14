import MainPage from '../../pages/main/main';

type HeaderProps = {
  // avatarUrl: string;
  email: string;
  // id: number;
  // isPro: boolean;
  // name: string;
  // token: string;
}

type AppProps = {
  userInfo: HeaderProps;
}

function App({userInfo}: AppProps): JSX.Element {
  return (
    <MainPage userInfo = {userInfo} />
  );
}

export default App;
