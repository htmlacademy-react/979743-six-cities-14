import { Helmet } from 'react-helmet-async';

function Error404(): JSX.Element{
  return (
    <>
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <main className="page__main page__main--index">
        <p className="error">Page not found</p>
      </main>
    </>
  );
}

export default Error404;
