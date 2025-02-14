import { FormEvent, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import { LoginResponse } from '../../types/users/Users.types';
import useAuthStore from '../../stores/useAuth';

const useLogin = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const response = await axiosInstance.post<LoginResponse>('/login?expiresIn=10m', {
        id: userId,
        password: userPw,
      });
      const { accessToken } = response.data;
      login(accessToken);
    } catch (error) {
      console.error('로그인에 문제가 발생했습니다.', error);
    }
  };

  return { userId, userPw, setUserId, setUserPw, handleLogin };
};

export default useLogin;
