import {JSX, ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

interface I_RequireAuthProps{
  children: ReactNode;
}

export const RequireAuth = ({children}: I_RequireAuthProps): JSX.Element => {
	const isAuth = true;
	const location = useLocation();

	if(!isAuth) {
		return <Navigate to={'/auth'} state={{from: location}} replace/>;
	}

	return <>{children}</>;
};