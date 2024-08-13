import './Loading.scss';

import React from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <br />
      <p>Memuat...</p>
    </div>
  );
};

export default Loading;
