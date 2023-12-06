import axios, { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIRoute, BASE_URL, REQUEST_TIMEOUT } from '../../const';
import { processErrorHandle } from '../../services/process-error-handle';
import { TOffers } from '../../types/offers';

type TLoadNearby = {
  isNearbyLoading: boolean;
  offersNearby: TOffers;
};

function useLoadNearby (): TLoadNearby {
  const params = useParams();
  const url = `${BASE_URL}${APIRoute.Offers}/${params.id}/nearby`;

  const [offersNearby, setOffersNearby] = useState<TOffers | undefined>();
  const [isNearbyLoading, setNearbyLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<TOffers>(url , {timeout: REQUEST_TIMEOUT})
      .then((response) => {
        setOffersNearby(response.data);
        setNearbyLoading(false); //завершили загрузку
      })
      .catch((err: AxiosError) => {
        processErrorHandle(err.message);
      });
  }, [url]);

  return {
    isNearbyLoading,
    offersNearby,
  };
}

export {useLoadNearby};
