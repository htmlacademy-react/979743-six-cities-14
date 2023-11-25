import { SORTING_TYPES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortingChange } from '../../store/action';

function PlacesSortingForm(): JSX.Element {
  // const sortingTypes = Object.keys(SortingType);
  const currentSorting = useAppSelector((state) => state.sorting); // извлекаем данные из store

  const dispatch = useAppDispatch();

  const sortingListElem = document.querySelector('.places__options');


  return (
    <form className="places__sorting" action="#" method="get">
      {/* input в форме где??? */}
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => sortingListElem?.classList.toggle('places__options--opened')}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
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
                  sortingListElem?.classList.remove('places__options--opened');
                }}
                // onClick={(evt:React.ChangeEvent<HTML???>) => dispatch(sortingChange(evt.target.textContent))}
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
