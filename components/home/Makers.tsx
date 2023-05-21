import React from 'react';
import useSWR from 'swr';
import { MAP_KEY } from '../../hooks/useMap';
import { STORE_KEY } from '../../hooks/useStores';
import type { ImageIcon, NaverMap } from '../../types/map';
import type { Store } from '../../types/store';
import Marker from './Marker';

const Makers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  const generateStoreMarkerIcon = (markerIndex: number): ImageIcon => {
    const MARKER_HEIGHT = 64;
    const MARKER_WIDTH = 54;
    const NUMBER_OF_MARKER = 13;
    const SCALE = 2 / 3;

    const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
    const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

    return {
      url: 'images/markers.png',
      size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
      origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
      scaledSize: new naver.maps.Size(
        SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
        SCALED_MARKER_HEIGHT
      ),
    };
  };

  if (!map || !stores) return null;
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={generateStoreMarkerIcon(store.season)}
            key={store.nid}
          />
        );
      })}
    </>
  );
};

export default Makers;
