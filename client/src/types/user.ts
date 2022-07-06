export enum UserActionTypes {
  PUT_USER = 'PUT_USER',
  PUT_USER_SUCCESS = 'PUT_USER_SUCCESS',
  PUT_USER_ERROR = 'PUT_USER_ERROR',
}

export type UserType = {
  id: number;
  email: string;
  exp: number;
  iat: number;
  role: string;
};

type FetchUserActionType = {
  type: UserActionTypes.PUT_USER;
};

type FetchUserSuccessActionType = {
  type: UserActionTypes.PUT_USER_SUCCESS;
  payload: UserType;
};

type FetchUserErrorActionType = {
  type: UserActionTypes.PUT_USER_ERROR;
  payload: string;
};

export type UserAction =
  | FetchUserActionType
  | FetchUserSuccessActionType
  | FetchUserErrorActionType;

export type UserState = {
  isAuth: boolean;
  user: UserType | undefined;
  isLoading: boolean;
  error: string | null;
};
