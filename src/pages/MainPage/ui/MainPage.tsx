import React from 'react';

import { ShipmentsList } from '../../../containers/ShipmentsList';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page__content">
          <ShipmentsList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
