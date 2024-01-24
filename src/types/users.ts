export enum UserRoles {
  ADMIN,
  LOGISTIC_MANAGER,
  MANAGER,
  CLIENT,
}

export interface I_User {
  _id: number;
  user_role: UserRoles;
  email: string;
  user_name: string | null;
  password: string;
  created_at: string;
}
