import { Helmet } from 'react-helmet-async';
import './error.css';

function Error404(): JSX.Element{
  return (
    <>
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <main className="page__main page__main--index page--error">
        <p className="error">Page not found</p>
      </main>
    </>
  );
}

export default Error404;
