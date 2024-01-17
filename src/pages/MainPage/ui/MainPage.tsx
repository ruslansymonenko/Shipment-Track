import React from 'react';
import { useTranslation } from 'react-i18next';

import { ShipmentsList } from '../../../containers/ShipmentsList';

const MainPage = () => {
  const { t } = useTranslation();

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
