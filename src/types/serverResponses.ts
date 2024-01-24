import { I_User } from './users';

export enum ResponseType {
  SUCCESS,
  ERROR,
}

export interface I_ServerResponse<T> {
  status: ResponseType;
  message: string;
  response: T;
}

export interface I_ServerAuthResponse {
  user: I_User;
  token: string;
}
