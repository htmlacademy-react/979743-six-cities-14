import dayjs from 'dayjs';
import { TReview } from '../../types/reviews';
import { DATE_FORMAT } from '../../const';

function Review(review: TReview): JSX.Element {
  const date = dayjs(review.date).format(DATE_FORMAT);

  const {rating, comment, user} = review;
  const ratingStarr: string = `${Math.round(rating) / 5 * 100}%`;

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingStarr}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </>
  );
}

export default Review;
