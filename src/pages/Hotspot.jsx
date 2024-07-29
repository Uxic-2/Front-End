import React from 'react';

const Hotspot = () => {
  return (
    <div>
      <h1>Hotspot Page</h1>
      <div id="map" style={{ width: '1000px', height: '500px', marginTop: '40px' }}>
      <li className="nav-item search-bar">
            <input type="text" placeholder="검색" />
          </li>
      </div>
    </div>
  );
};

export default Hotspot;
