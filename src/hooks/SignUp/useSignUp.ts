import { FormEvent, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import { SignupResponse } from '../../types/users/Users.types';

const useSignUp = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const response = await axiosInstance.post<SignupResponse>('/register', {
        id: userId,
        password: userPw,
        nickname: userNickname,
      });
      console.log(response.data.success);
    } catch (error) {
      console.error('회원가입에 문제가 발생했습니다.', error);
    }
  };

  return { userId, setUserId, userPw, setUserPw, userNickname, setUserNickname, handleSubmit };
};

export default useSignUp;
