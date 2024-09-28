import React, { useEffect } from "react";

function MapApi({ setKakaoMapLoaded }) {
  // API 키 env file에 정의
  const apiKey = process.env.REACT_APP_KAKAO_MAP_API;

  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
        script.async = true;

        script.onload = () => {
          window.kakao.maps.load(() => {
            setKakaoMapLoaded(true);
          });
        };

        script.onerror = () => {
          console.error("Failed to load Kakao Maps API");
        };

        document.head.appendChild(script);
      } else {
        setKakaoMapLoaded(true);
      }
    };

    loadKakaoMap();
  }, [setKakaoMapLoaded]);

  return null;
}

export default MapApi;
