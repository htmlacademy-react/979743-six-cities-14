import { REVIEWS_QTY } from '../../const';
import { useAppSelector } from '../../hooks';
import { getReviewsList } from '../../store/data-process/selectors';
import { sortReviews } from '../../util';
import Review from './review';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector(getReviewsList);
  const sortedReviews = sortReviews(reviews).slice(0, REVIEWS_QTY);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((sortedReview) => (
        <li
          className="reviews__item"
          key={sortedReview.id}
        >
          <Review {...sortedReview}/>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
