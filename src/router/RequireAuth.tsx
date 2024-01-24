import { JSX, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface I_RequireAuthProps {
  children: ReactNode;
  isAuth: boolean;
}

export const RequireAuth = ({ children, isAuth }: I_RequireAuthProps): JSX.Element => {
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate
        to={'/auth'}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};
