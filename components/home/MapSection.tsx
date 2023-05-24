import useMap from '@/hooks/useMap';
import React from 'react';
import Map from './Map';
import type { NaverMap } from '../../types/map';
import useCurrentStore from '../../hooks/useCurrentStore';
import Makers from './Makers';

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />;
      <Makers />
    </>
  );
};

export default MapSection;
