import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_User, UserRoles } from '../../../types/users';
import { I_ServerAuthResponse, I_ServerResponse } from '../../../types/serverResponses';
import { RootState } from '../../index';

interface I_AuthSlice {
  user: I_User | null;
  userRole: UserRoles | null;
  token: string | null;
}

const initialState: I_AuthSlice = {
  user: null,
  userRole: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state: I_AuthSlice,
      action: PayloadAction<I_ServerResponse<I_ServerAuthResponse>>,
    ) => {
      const { user, token } = action.payload.response;

      state.user = user;
      state.userRole = user.user_role;
      state.token = token;
    },
    removeUser: (state: I_AuthSlice) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const authCheck = (state: RootState): boolean => Boolean(state.auth.token);

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
