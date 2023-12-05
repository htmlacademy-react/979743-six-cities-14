import { useAppSelector } from '../../hooks';
import Review from './review';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviewsList);
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
