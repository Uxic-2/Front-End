import React, { useEffect, useRef, useState } from "react";

const MapApi = () => {
  const containerRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Kakao 지도 API 스크립트 동적으로 추가
    const apikey = process.env.REACT_APP_KAKAO_MAP_API;

    const script = document.createElement("script");
    script.async = true;
    script.src = apikey;
    document.body.appendChild(script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
        setIsMapLoaded(true); // 지도가 로드되었음을 설정
      });
    };
    script.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div
      id="map"
      ref={containerRef}
      className={`z-0 w-[70%] h-[70vh] m-auto ${
        isMapLoaded ? "" : "bg-slate-200"
      }`}
    ></div>
  );
};

export default MapApi;
