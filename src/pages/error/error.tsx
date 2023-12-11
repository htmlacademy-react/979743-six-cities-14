import { Helmet } from 'react-helmet-async';
import './error.css';
import { Link } from 'react-router-dom';

function Error404(): JSX.Element{
  return (
    <>
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <main className="page__main page__main--index page--error">
        <p className="error">Page not found 404</p>
        <Link className="go-home" to="/">Home &rarr;</Link>
      </main>
    </>
  );
}

export default Error404;
