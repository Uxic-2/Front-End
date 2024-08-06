import { useEffect, useRef } from "react";

const MapApi = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Kakao 지도 API 스크립트 동적으로 추가
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=1d3351181fac2fc990523f9dd2d4d36f&autoload=false";
    document.body.appendChild(script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    script.addEventListener("load", onLoadKakaoMap);
  }, []);

  return <div id="map" ref={containerRef}></div>;
};

export default MapApi;
