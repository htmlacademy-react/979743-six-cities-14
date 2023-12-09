import { City } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';
import { getCity } from '../../store/user-actions/selectors';

function Tabs(): JSX.Element {
  const cities = Object.keys(City);
  const currentCity = useAppSelector(getCity); // извлекаем данные из store

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => {
              const classList = city === currentCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
              return (
                <li className="locations__item" key={city}>
                  <div
                    className={classList}
                    onClick={() => dispatch(cityChange(city))}
                  >
                    <span>{city}</span>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
