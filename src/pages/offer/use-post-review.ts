import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BASE_URL, APIRoute } from '../../const';
import axios from 'axios';

type TNewReview = {
  comment: string;
  rating: number;
};

function usePostReview (review: TNewReview) {
  const params = useParams();
  const url = `${BASE_URL}${APIRoute.Reviews}/${params.id}`;

  useEffect (() => {
    axios.post<TNewReview>(url, review)
      .then((response) => {})
      .catch((err) => {
        console.log(err);

      });
  },[url, review]);

}

export {usePostReview};
