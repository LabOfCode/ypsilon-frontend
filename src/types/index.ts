export interface User {
  _id: string;
  email: string;
  verify: boolean;
  firstname?: string;
  lastname?: string;
}

//Auth

export interface AuthState {
  user: { user: User };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface AuthResponse {
  user: User;
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
