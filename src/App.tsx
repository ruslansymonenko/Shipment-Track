import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';

import AppRouter from './router/AppRouter';
import { ThemeContext } from './providers/ThemeProvider/ui/ThemeProvider';

import { addClassNames } from './utils/addClassNames/addClassNames';
import { setShipments } from './store/slices/dataSlices/shipmentsSlice';
import { authCheck } from './store/slices/userSlices/authSlice';

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();
  const isAuth: boolean = useSelector(authCheck);

  useEffect(() => {
    dispatch(setShipments());
  }, [dispatch]);

  return (
    <div className={addClassNames('app', {}, [theme])}>
      <div className="page-content">
        <AppRouter isAuth={isAuth} />
      </div>
    </div>
  );
}

export default App;
