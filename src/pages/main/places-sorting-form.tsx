import { useState } from 'react';
import { SORTING_TYPES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortingChange } from '../../store/action';
import { getSorting } from '../../store/user-actions/selectors';

function PlacesSortingForm(): JSX.Element {
  const currentSorting = useAppSelector(getSorting);

  const dispatch = useAppDispatch();
  const [isSortVisible, setIsSortVisible] = useState(false);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => {
        setIsSortVisible(!isSortVisible);
      }}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options ${isSortVisible ? 'places__options--visible' : '  places__options--custom'}`}
      >
        {
          SORTING_TYPES.map((sorting) => {
            const classList: string = sorting === currentSorting ? 'places__option places__option--active' : 'places__option';
            return (
              <li
                className={classList}
                tabIndex={0}
                key={sorting}
                onClick={() => {
                  dispatch(sortingChange(sorting));
                  setIsSortVisible(false);
                }}
              >
                {sorting}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default PlacesSortingForm;
