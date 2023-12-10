import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { checkReviewValidate } from '../../util';
import { MIN_COMMENT_LENGTH } from '../../const';

function ReviewForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [isReviewValid, setIsReviewValid] = useState(false);

  const [newReview, setnewReview] = useState({
    rating: 0,
    comment: '',
  });

  const handleDataChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setnewReview({
      ...newReview,
      [name]: value,
      // isReviewValid: checkReviewValidate(newReview.comment, newReview.rating)
    });
  };

  const handleReviewSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (isReviewValid) {
      dispatch(sendReviewAction({
        rating: Number(newReview.rating),
        comment: newReview.comment,
        id: params.id,
      }));
    }
    setnewReview({
      rating: 0,
      comment: '',
      // isReviewValid: false,
    });
  };

  useEffect(() => {
    setIsReviewValid(checkReviewValidate(newReview.comment, newReview.rating));
  }, [newReview]);

  return (
    <form className="reviews__form form" onSubmit={handleReviewSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange = {handleDataChange} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange = {handleDataChange} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange = {handleDataChange} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange = {handleDataChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={newReview.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isReviewValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
