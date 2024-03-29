import { I_Shipment, ShipmentStatuses, Carriers } from '../types/shipments';

export const shipmentsTestData: I_Shipment[] = [
  {
    order: '1',
    sender: 'Sender1',
    client: 'Client1',
    sender_address: '1b, st. Test street, Pordenone, Italy',
    client_address: '10, st. Some Street, Kyiv Region, Kyiv',
    status: ShipmentStatuses.NEW,
    created_at: '2024-01-21T10:00:00',
    updated_at: '2024-01-02T12:30:00',
    expected_at: '2024-01-10T15:45:00',
    delivered_at: null,
    carrier: Carriers.CARRIER_1,
    volume: 15.5,
    weight: 1230.2,
    packages_amount: 20,
  },
  {
    order: '2',
    sender: 'Sender2',
    client: 'Client2',
    sender_address: '1b, st. Test street, Pordenone, Italy',
    client_address: '10, st. Some Street, Kyiv Region, Kyiv',
    status: ShipmentStatuses.AT_WAREHOUSE,
    created_at: '2024-01-11T10:00:00',
    updated_at: null,
    expected_at: '2024-02-10T15:45:00',
    delivered_at: null,
    carrier: Carriers.CARRIER_1,
    volume: 0.5,
    weight: 1.2,
    packages_amount: 1,
  },
  {
    order: '3',
    sender: 'Sender3',
    client: 'Client3',
    sender_address: '1b, st. Test street, Pordenone, Italy',
    client_address: '10, st. Some Street, Kyiv Region, Kyiv',
    status: ShipmentStatuses.IN_PROGRESS,
    created_at: '2024-01-17T10:00:00',
    updated_at: '2024-01-02T12:30:00',
    expected_at: '2024-01-10T15:45:00',
    delivered_at: null,
    carrier: Carriers.CARRIER_2,
    volume: 5.2,
    weight: 40,
    packages_amount: 10,
  },
  {
    order: '4',
    sender: 'Sender4',
    client: 'Client4',
    sender_address: '1b, st. Test street, Pordenone, Italy',
    client_address: '10, st. Some Street, Kyiv Region, Kyiv',
    status: ShipmentStatuses.IN_TRANSIT,
    created_at: '2024-02-11T10:00:00',
    updated_at: '2024-01-23T12:30:00',
    expected_at: '2024-06-18T15:45:00',
    delivered_at: null,
    carrier: Carriers.CARRIER_4,
    volume: 3,
    weight: 45,
    packages_amount: 11,
  },
  {
    order: '5',
    sender: 'Sender5',
    client: 'Client5',
    sender_address: '1b, st. Test street, Pordenone, Italy',
    client_address: '10, st. Some Street, Kyiv Region, Kyiv',
    status: ShipmentStatuses.DELIVERED,
    created_at: '2024-01-01T10:00:00',
    updated_at: '2024-05-12T12:30:00',
    expected_at: '2024-11-22T15:45:00',
    delivered_at: '2024-01-10T15:45:00',
    carrier: Carriers.CARRIER_3,
    volume: 6,
    weight: 50,
    packages_amount: 1,
  },
];
