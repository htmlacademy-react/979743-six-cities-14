import axios from 'axios';
import { TOfferInfo } from '../../types/offer-info';
import { BASE_URL, APIRoute, REQUEST_TIMEOUT } from '../../const';
import { useAppDispatch } from '../../hooks';
import { offerInfoLoading, offersLoading } from '../../store/action';

function useLoadOfferInfo(paramsId: string): void {
  const url = `${BASE_URL}${APIRoute.Offers}/${paramsId}`;
  const dispatch = useAppDispatch();

  axios.get<TOfferInfo>(url , {timeout: REQUEST_TIMEOUT})
    .then((response) => {
      dispatch(offerInfoLoading(response.data));
      dispatch(offersLoading(false));
    })
    .catch((err) => {
      console.log('Error: что-то пошло не так ', err); // TODO
    // dispatch(serverError(???));
    });
}

export {useLoadOfferInfo};
