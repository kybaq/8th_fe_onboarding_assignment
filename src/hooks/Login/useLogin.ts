import { FormEvent, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import { LoginResponse } from '../../types/users/Users.types';

const useLogin = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const response = await axiosInstance.post<LoginResponse>('/login?expiresIn=10m', {
        id: userId,
        password: userPw,
      });
      console.log(response.data.success);
    } catch (error) {
      console.error('로그인에 문제가 발생했습니다.', error);
    }
  };

  return { userId, userPw, setUserId, setUserPw, handleSubmit };
};

export default useLogin;
