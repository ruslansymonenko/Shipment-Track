import { createSlice } from '@reduxjs/toolkit';
import { I_Shipment } from '../../../types/shipments';

import { shipmentsTestData } from '../../../testdata/testShipments';

interface I_ShipmentsSlice {
  shipments: I_Shipment[] | null;
}

const initialState: I_ShipmentsSlice = {
  shipments: null,
};

const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    setShipments: (state: I_ShipmentsSlice) => {
      state.shipments = shipmentsTestData;
    },
  },
});

export const { setShipments } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;
