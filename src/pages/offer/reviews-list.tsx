import { TReviews } from '../../types/reviews';
import Review from './review';
// import { ReviewProps } from './review';

type ReviewsListProps = {
  reviews: TReviews;
};

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
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
