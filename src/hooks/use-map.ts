import { CityLocationType } from '../types/cities';
import { useRef, useState, useEffect, MutableRefObject} from 'react';
import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityLocation: CityLocationType): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation.lat ?? 0,
          lng: cityLocation.lng ?? 0,
        },
        zoom: cityLocation.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, cityLocation]);

  return map;
}

export default useMap;
