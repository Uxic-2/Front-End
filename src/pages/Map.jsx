import React, { useEffect } from 'react';

function Map({ className }) {
  useEffect(() => {
    const container = document.getElementById('map');
    if (!container) return; // 컨테이너가 없을 경우 조기 종료

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 시청 좌표
      level: 3,
    };

    // Kakao 지도 인스턴스 생성
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" className={className} style={{ height: '100%' }}></div>; // 높이 스타일 추가
}

export default Map;
