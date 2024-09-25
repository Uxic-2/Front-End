import React, { useEffect } from "react";

function MapApi({ setKakaoMapLoaded }) {
    useEffect(() => {
        const loadKakaoMap = () => {
            if (!window.kakao || !window.kakao.maps) {
                const script = document.createElement("script");
                script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_ACTUAL_API_KEY&autoload=false"; // 실제 API 키로 변경
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
