import React, { useEffect, useState } from 'react';
import { I_Shipment, ShipmentStatuses } from '../../../types/shipments';
import { formatDate } from '../../../helpers/formatDate/formatDate';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

interface I_ShipmentsListItemProps {
  shipment: I_Shipment;
  showInfoFunc: () => void;
}

const ShipmentsListItem: React.FC<I_ShipmentsListItemProps> = ({ shipment, showInfoFunc }) => {
  const { sender, status, order, expected_at, created_at } = shipment;
  const [statusColor, setStatusColor] = useState('');
  const [expectedDate, setExpectedDate] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  useEffect(() => {
    setExpectedDate(formatDate(expected_at));
    setCreatedDate(formatDate(created_at));
  }, []);

  useEffect(() => {
    switch (status) {
      case ShipmentStatuses.NEW:
        setStatusColor('shipments-list__status-color--new');
        break;
      case ShipmentStatuses.IN_PROGRESS:
        setStatusColor('shipments-list__status-color--inprogress');
        break;
      case ShipmentStatuses.IN_TRANSIT:
        setStatusColor('shipments-list__status-color--intransit');
        break;
      case ShipmentStatuses.AT_WAREHOUSE:
        setStatusColor('shipments-list__status-color--atwarehouse');
        break;
      case ShipmentStatuses.DELIVERED:
        setStatusColor('shipments-list__status-color--delivered');
        break;
      default:
        setStatusColor('');
    }
  }, [status]);

  return (
    <li
      className="shipments-list__item"
      onClick={showInfoFunc}
    >
      <div className="shipments-list__item-column">{sender}</div>
      <div className="shipments-list__item-column">{order}</div>
      <div className="shipments-list__item-column">
        <div className="shipments-list__item-status">
          <span className="shipments-list__status-text">{status}</span>
          <span className={addClassNames('shipments-list__status-color', {}, [statusColor])}></span>
        </div>
      </div>
      <div className="shipments-list__item-column">{expectedDate}</div>
      <div className="shipments-list__item-column">{createdDate}</div>
    </li>
  );
};

export default ShipmentsListItem;
