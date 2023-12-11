import './map.css';
import { TOffers } from '../../types/offers';
import { CityLocationType } from '../../types/cities';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, ICON_ANCHOR, ICON_SIZE } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';

type MapProps = {
  cityLocation: CityLocationType;
  offers: TOffers;
  activeCardId: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

function Map({cityLocation, offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, cityLocation);

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

  useEffect(() => {
    map?.setView([cityLocation.lat ?? 0, cityLocation.lng ?? 0]);
  }, [map, cityLocation]);

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        ref={mapRef}
      >
      </section>
    </div>
  );
}

export default Map;
