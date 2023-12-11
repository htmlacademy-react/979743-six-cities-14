import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { checkReviewValidate } from '../../util';
import { NewCommentCondition } from '../../const';

function ReviewForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [isReviewValid, setIsReviewValid] = useState(false);
  const reviewList = useAppSelector((state) => state.DATA.reviewsList);
  const [newReview, setnewReview] = useState<{rating?: number; comment: string}>({
    rating: 0,
    comment: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleDataChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setnewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleReviewSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (isReviewValid) {
      dispatch(sendReviewAction({
        rating: Number(newReview.rating),
        comment: newReview.comment,
        id: params.id ?? '',
      }));
    }
  };

  useEffect(() => {
    const isValid = checkReviewValidate(newReview.comment, newReview.rating);
    setIsReviewValid(isValid);
  }, [newReview]);

  useEffect(() => {
    formRef?.current?.reset();

    setnewReview({
      rating: undefined,
      comment: '',
    });
  }, [reviewList]);

  return (
    <form className="reviews__form form" onSubmit={handleReviewSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={Number(newReview.rating) === 5}
          disabled={Number(newReview.rating) !== 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect" onClick={() => {
          setnewReview({...newReview, rating: 5});
        }}
        >
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
          checked={Number(newReview.rating) === 4}
          disabled={Number(newReview.rating) !== 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good" onClick={() => {
          setnewReview({...newReview, rating: 4});
        }}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={Number(newReview.rating) === 3}
          disabled={Number(newReview.rating) !== 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad" onClick={() => {
          setnewReview({...newReview, rating: 3});
        }}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={Number(newReview.rating) === 2}
          disabled={Number(newReview.rating) !== 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly" onClick={() => {
          setnewReview({...newReview, rating: 2});
        }}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange = {handleDataChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-stars"
          type="radio"
          checked={Number(newReview.rating) === 1}
          disabled={Number(newReview.rating) !== 1}
        />
        <label htmlFor="1-stars" className="reviews__rating-label form__rating-label" title="terribly" onClick={() => {
          setnewReview({...newReview, rating: 1});
        }}
        >
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
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{NewCommentCondition.MinCommentLength} characters</b>.
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
