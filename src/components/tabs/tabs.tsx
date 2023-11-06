import { City, DEFAULT_CITY } from '../../const';
import { NavLink } from 'react-router-dom';

// function getActiveLinkStyle({isActive}): string {
//   return isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
// }

function Tabs(): JSX.Element {
  const cities = Object.keys(City);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => {
              const classList = city === DEFAULT_CITY ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
              return ( //исходим из того, что в массиве все города уникальны
                <li className="locations__item" key={city}>
                  <NavLink className={classList} to="/" >
                    <span>{city}</span>
                  </NavLink>
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
