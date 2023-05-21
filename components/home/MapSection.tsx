import useMap from '@/hooks/useMap';
import React from 'react';
import Map from './Map';
import type { NaverMap } from '../../types/map';
import Makers from './Makers';

const MapSection = () => {
  const { initializeMap } = useMap();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />;
      <Makers />
    </>
  );
};

export default MapSection;
