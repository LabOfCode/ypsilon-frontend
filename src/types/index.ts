export interface IUser {
  _id: string;
  email: string;
  verify: boolean;
  firstname?: string;
  lastname?: string;
}

export interface IVacancy {
  _id: string;
  title: string;
  place: string;
  price: number;
  img: string;
  isTop: boolean;
}

export interface VacanciesResponse {
  vacancies: IVacancy[];
  total: number;
}

//Auth

export interface AuthState {
  user: IUser;
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
