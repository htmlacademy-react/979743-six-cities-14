import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TOfferInfo } from '../../types/offer-info';
import { BASE_URL, APIRoute, REQUEST_TIMEOUT } from '../../const';
import { processErrorHandle } from '../../services/process-error-handle';

type TLoadOfferInfo = {
  isOfferInfoLoading: boolean;
  offerInfo: TOfferInfo; // TS хочет | undefined, но тогда будет проблема в offer.tsx, он везде будет ругаться на undefined
  // либо гарантированно что-то возвращать, объект с пустыми полями, например...
  paramsID: string;
};

function useLoadOfferInfo(): TLoadOfferInfo {
  const params = useParams();
  const paramsID = params.id;
  const url = `${BASE_URL}${APIRoute.Offers}/${params.id}`;

  const [offerInfo, setOfferInfo] = useState<TOfferInfo | undefined>();
  const [isOfferInfoLoading, setOfferLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<TOfferInfo>(url , {timeout: REQUEST_TIMEOUT})
      .then((response) => {
        setOfferInfo(response.data);
        setOfferLoading(false); //завершили загрузку
      })
      .catch((err) => {
        processErrorHandle(err.response.data.message); // TODO
      });
  }, [url]);

  return {
    isOfferInfoLoading,
    offerInfo,
    paramsID,
  };
}

export {useLoadOfferInfo};
