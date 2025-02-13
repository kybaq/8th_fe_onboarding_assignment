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
