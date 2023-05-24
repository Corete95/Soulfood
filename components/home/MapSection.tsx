import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';
import useCurrentStore from '../../hooks/useCurrentStore';
import Map from './Map';
import Makers from './Makers';
import type { NaverMap } from '../../types/map';
import type { Coordinates } from '../../types/store';

const MapSection = () => {
  const router = useRouter();
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      ;
      <Makers />
    </>
  );
};

export default MapSection;
