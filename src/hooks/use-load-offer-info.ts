import axios, { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TOfferInfo } from '../types/offer-info';
import { BASE_URL, APIRoute, REQUEST_TIMEOUT } from '../const';
import { getToken } from '../services/token';

type TLoadOfferInfo = {
  isOfferInfoLoading: boolean;
  offerInfo: TOfferInfo;
};

function useLoadOfferInfo(): TLoadOfferInfo {
  const params = useParams();
  const navigate = useNavigate();
  const url = `${BASE_URL}${APIRoute.Offers}/${params.id}`;

  const [offerInfo, setOfferInfo] = useState<TOfferInfo | undefined>();
  const [isOfferInfoLoading, setOfferLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<TOfferInfo>(url , {timeout: REQUEST_TIMEOUT, headers: {'x-token': getToken()}})
      .then((response) => {
        setOfferInfo(response.data);
        setOfferLoading(false); //завершили загрузку
      })
      .catch((err: AxiosError) => {
        setOfferLoading(false);
        if (err.response?.status === 404) {
          navigate('/page-not-found');
        }
      });
  }, [url, navigate]);
  return {
    isOfferInfoLoading,
    offerInfo,
  };
}

export {useLoadOfferInfo};
