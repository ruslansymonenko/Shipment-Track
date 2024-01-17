import React, { useEffect, useState } from 'react';
import { I_Shipment } from '../../../types/shipments';
import { formatDate } from '../../../helpers/formatDate';

interface I_ShipmentsListItemProps {
  shipment: I_Shipment;
  showInfoFunc: () => void;
}

const ShipmentsListItem: React.FC<I_ShipmentsListItemProps> = ({ shipment, showInfoFunc }) => {
  const { sender, status, order, expected_at, created_at } = shipment;
  const [expectedDate, setExpectedDate] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  useEffect(() => {
    setExpectedDate(formatDate(expected_at));
    setCreatedDate(formatDate(created_at));
  }, []);

  return (
    <li
      className="shipments-list__item"
      onClick={showInfoFunc}
    >
      <div className="shipments-list__item-column">{sender}</div>
      <div className="shipments-list__item-column">{order}</div>
      <div className="shipments-list__item-column">{status}</div>
      <div className="shipments-list__item-column">{expectedDate}</div>
      <div className="shipments-list__item-column">{createdDate}</div>
    </li>
  );
};

export default ShipmentsListItem;
