import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { routesConfig } from './routesConfig';
import { RequireAuth } from './RequireAuth';

import { Layout } from '../Layout/index';
import { LayoutType } from '../Layout/ui/Layout';

interface I_AppRouterProps {
  isAuth: boolean;
}

const AppRouter = ({ isAuth }: I_AppRouterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && location.pathname === '/auth') {
      navigate('/');
    }
  }, [isAuth, location]);

  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        {Object.values(routesConfig).map((routeData, index) => {
          const AppPage = routeData.component;

          return routeData.private ? (
            <Route
              key={index}
              path={routeData.path}
              element={
                <RequireAuth isAuth={isAuth}>
                  <Layout layoutType={LayoutType.WITH_AUTH}>
                    <AppPage />
                  </Layout>
                </RequireAuth>
              }
            />
          ) : (
            <Route
              key={index}
              path={routeData.path}
              element={
                <Layout layoutType={LayoutType.WITHOUT_AUTH}>
                  <AppPage />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
