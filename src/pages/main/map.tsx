import { OfferInfoProps } from '../offer/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import {Icon} from 'leaflet';

type MapProps = {
  offers: OfferInfoProps[];
  activeCardId: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  // в mapRefcurrent попадет ссылка на тот DOM-элемент, которому будет назначен пропс ref={mapRef}
  // будет заполнено ТОЛЬКО после отрисовки компонента
  const map = useMap(mapRef, offers[0].city, activeCardId); // как правильно получить название города??

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        style = {{height: '500px'}} //?????
        ref={mapRef}
      >
      </section>
    </div>
  );
}

export default Map;
