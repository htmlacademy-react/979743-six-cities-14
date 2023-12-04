import { TReview } from '../../types/reviews';

// export type ReviewProps = {
//   comment: string;
//   date: string;
//   id: string;
//   rating: number;
//   user: {
//     avatarUrl: string;
//     name: string;
//     isPro: boolean;
//   };
// }

function Review(review: TReview): JSX.Element {
  const {rating, comment, user} = review;
  const ratingStarr: string = `${rating / 5 * 100}%`;

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
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </>
  );
}

export default Review;
