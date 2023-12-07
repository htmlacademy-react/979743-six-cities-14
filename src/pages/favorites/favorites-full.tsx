import { TOffers } from '../../types/offers';
import FavoritesCard from './favorites-card';
import { City } from '../../const';
import { selectOffersByCity } from '../../util';

type FavoritesFullProps = {
  favorites: TOffers;
}

//на входе уже отфильтрованный массив по isFavorites
function FavoritesFull({favorites}: FavoritesFullProps): JSX.Element {
  const cities = Object.keys(City);
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((city) => {
                  if(selectOffersByCity(favorites, city).length > 0) {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {
                            selectOffersByCity(favorites, city).map((offer) => (
                              <article className="favorites__card place-card" key = {offer.id}>
                                <FavoritesCard offer = {offer}/>
                              </article>
                            ))
                          }
                        </div>
                      </li>
                    );
                  }
                })
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </>
  );
}

export default FavoritesFull;
