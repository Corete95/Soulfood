import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import { Coordinates } from '../../types/store';
import { NaverMap } from '../../types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';
import styles from '../../styles/map.module.scss';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  const ttt = async () => {
    // const test = await fetch(
    //   'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode',
    //   {
    //     params: { query: '테헤란로 427' },
    //     headers: {
    //       'X-NCP-APIGW-API-KEY-ID': 'w6ey1g6fap',
    //       'X-NCP-APIGW-API-KEY': 'llUaToGYIOeM8DnCY1852neJrCYv00V09liRqiZ2',
    //     },
    //   }
    // );
    // const bb = await test.json();
    // console.log('b', bb);
    // // naver.maps.Service.geocode(
    // //   {
    // //     query: '남산타워',
    // //   },
    // //   function (status, response) {
    // //     console.log(status, response);
    // //   }
    // // );
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}&submodules=geocoder`}
        onReady={initializeMap}
      />
      <div id={mapId} className={styles.map} />
      <button onClick={ttt}>123</button>
    </>
  );
};

export default Map;
