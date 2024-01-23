import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { showSidebar } from '../../../store/slices/appSlices/sidebarSlice';

import { ShipmentsListItem } from '../../../components/ShipmentsListItem';

import './ShipmentsList.scss';

const ShipmentsList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const shipmentsData = useSelector((state: RootState) => state.shipments.shipments);

  const handleAdditionalShipmentInfo = () => {
    dispatch(showSidebar());
  };

  return (
    <div className="shipments-list__container">
      <div className="shipments-list__header">
        <div className="shipments-list__header-item">{t('Sender')}</div>
        <div className="shipments-list__header-item">{t('Order')}</div>
        <div className="shipments-list__header-item">{t('Status')}</div>
        <div className="shipments-list__header-item">{t('Expected')}</div>
        <div className="shipments-list__header-item">{t('Created')}</div>
      </div>
      <ul className="shipments-list">
        {shipmentsData ? (
          shipmentsData.map(shipment => (
            <ShipmentsListItem
              key={shipment.order}
              shipment={shipment}
              showInfoFunc={handleAdditionalShipmentInfo}
            />
          ))
        ) : (
          <li className="shipments-list__item shipments-list__item--empty">
            {t('There are no current deliveries')}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ShipmentsList;
