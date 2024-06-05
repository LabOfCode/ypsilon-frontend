export interface IUser {
  _id: string;
  email: string;
  verify: boolean;
  firstname?: string;
  lastname?: string;
}

//Auth

export interface AuthState {
  user: { user: IUser };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface AuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface CredentialsSignUp extends CredentialsLogIn {
  fullname: string;
}

export interface CredentialsLogIn {
  email: string;
  password: string;
}
