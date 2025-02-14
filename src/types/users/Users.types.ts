export type SignupResponse = {
  message: string;
  success: boolean;
};

export type LoginResponse = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
};

export type AuthState = {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export type User = {
  id: string;
  nickname: string;
  avatar: null;
  success: boolean;
} | null;
