import { OfferInfoProps } from '../offer/offer';
import { CitesLocationType } from '../../types/cities';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef } from 'react';
import useMap from '../../hooks/use-map';
import {Icon} from 'leaflet';
import { getCitiesLocation } from '../../util';

type MapProps = {
  city: CitesLocationType;
  offers: OfferInfoProps[];
  activeCardId: number | null;
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

function Map({cityLocation, offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  // в mapRef.current попадет ссылка на тот DOM-элемент, которому будет назначен пропс ref={mapRef}
  // будет заполнено ТОЛЬКО после отрисовки компонента

  const map = useMap(mapRef, cityLocation, activeCardId); // как правильно получить название города??

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        style = {{minHeight: '100%'}}
        ref={mapRef}
      >
      </section>
    </div>
  );
}

export default Map;
