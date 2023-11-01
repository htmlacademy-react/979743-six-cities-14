import { OfferInfoProps } from '../offer/offer';
import FavoritesCard from './favorites-card';
import { City } from '../../const';
import { selectOffersByCity } from '../../util';

type FavoritesFullProps = {
  favorites: OfferInfoProps[];
}

//на входе уже отфильтрованный массив по isFavorites
function FavoritesFull({favorites}: FavoritesFullProps): JSX.Element {
  const cities = Object.keys(City);
  return (
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
  );
}

export default FavoritesFull;
