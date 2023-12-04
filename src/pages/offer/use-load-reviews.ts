import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, APIRoute, REQUEST_TIMEOUT } from '../../const';
import { processErrorHandle } from '../../services/process-error-handle';
import { TReviews } from '../../types/reviews';

function useLoadReviews() {
  const params = useParams();
  const url = `${BASE_URL}${APIRoute.Reviews}/${params.id}`;

  const [reviews, setReviews] = useState<TReviews>();
  const [isReviewsLoading, setReviewsLoading] = useState<boolean>(true); // надо?? TODO

  useEffect (() => {
    axios.get<TReviews>(url , {timeout: REQUEST_TIMEOUT})
      .then((response) => {
        setReviews(response.data);
        setReviewsLoading(false); //завершили загрузку
      })
      .catch((err) => {
        processErrorHandle(err.response.data.message); // TODO
      });
  }, [url]);

  return {
    reviews,
    isReviewsLoading
  };
}

export {useLoadReviews};
