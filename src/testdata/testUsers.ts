import { I_User, UserRoles } from '../types/users';

export const admin: I_User = {
  _id: 1,
  user_role: UserRoles.ADMIN,
  email: 'admin@site.com',
  user_name: 'admin',
  password: 'admin',
  created_at: '10/12/23',
};

export const logisticManager: I_User = {
  _id: 2,
  user_role: UserRoles.LOGISTIC_MANAGER,
  email: 'logisticManager@site.com',
  user_name: 'logisticManager',
  password: 'logisticManager',
  created_at: '10/12/23',
};

export const manager: I_User = {
  _id: 3,
  user_role: UserRoles.MANAGER,
  email: 'manager@site.com',
  user_name: 'manager',
  password: 'manager',
  created_at: '10/12/23',
};

export const client: I_User = {
  _id: 4,
  user_role: UserRoles.CLIENT,
  email: 'client@site.com',
  user_name: 'client',
  password: 'client',
  created_at: '10/12/23',
};
