import { REVIEWS_QTY } from '../../const';
import { useAppSelector } from '../../hooks';
import { sortReviews } from '../../util';
import Review from './review';

function ReviewsList(): JSX.Element {
  const reviews1 = useAppSelector((state) => state.reviewsList);
  const reviews = sortReviews(reviews1).slice(0, REVIEWS_QTY);

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li
          className="reviews__item"
          key={review.id}
        >
          <Review {...review}/>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
