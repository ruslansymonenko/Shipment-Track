import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

import AppRouter from './router/AppRouter';
import { ThemeContext } from './providers/ThemeProvider/ui/ThemeProvider';

import { addClassNames } from './utils/addClassNames/addClassNames';
import { setShipments } from './store/slices/dataSlices/shipmentsSlice';

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setShipments());
  }, []);

  return (
    <div className={addClassNames('app', {}, [theme])}>
      <div className="page-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
