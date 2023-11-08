import { OfferInfoProps } from '../offer/offer';
import { CityLocationType } from '../../types/cities';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';

type MapProps = {
  cityLocation: CityLocationType;
  offers: OfferInfoProps[];
  activeCardId: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map({cityLocation, offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  // в mapRef.current попадет ссылка на тот DOM-элемент, которому будет назначен пропс ref={mapRef}
  // будет заполнено ТОЛЬКО после отрисовки компонента

  const map = useMap(mapRef, cityLocation, activeCardId);

  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCardId !== undefined && offer.id === activeCardId ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

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
