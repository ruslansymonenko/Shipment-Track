export enum ShipmentStatuses {
  NEW = 'New',
  IN_PROGRESS = 'In Progress',
  IN_TRANSIT = 'In Transit',
  AT_WAREHOUSE = 'At Warehouse',
  DELIVERED = 'Delivered',
}

export enum Carriers {
  CARRIER_1 = 'Carrier_1',
  CARRIER_2 = 'Carrier_2',
  CARRIER_3 = 'Carrier_3',
  CARRIER_4 = 'Carrier_4',
  CARRIER_5 = 'Carrier_5',
}

export interface I_Shipment {
  order: string;
  sender: string;
  client: string;
  sender_address: string;
  client_address: string;
  status: ShipmentStatuses;
  created_at: string;
  updated_at: string | null;
  expected_at: string;
  delivered_at: string | null;
  carrier: Carriers;
  volume: number;
  weight: number;
  packages_amount: number;
}
