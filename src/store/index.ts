import { configureStore } from '@reduxjs/toolkit';

//App
import sidebarSlice from './slices/appSlices/sidebarSlice';

//Data
import shipmentsSlice from './slices/dataSlices/shipmentsSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    shipments: shipmentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
