export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

type UserType = {
  id: number;
  email: string;
  exp: number;
  iat: number;
  role: string;
};

type FetchUserActionType = {
  type: UserActionTypes.FETCH_USER;
};

type FetchUserSuccessActionType = {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: UserType;
};

type FetchUserErrorActionType = {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
};

export type UserAction =
  | FetchUserActionType
  | FetchUserSuccessActionType
  | FetchUserErrorActionType;

export type UserState = {
  isAuth: boolean;
  user: UserType | undefined;
  loading: boolean;
  error: string | null;
};
