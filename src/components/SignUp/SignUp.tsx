import { FormEvent, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import { Link } from 'react-router';
import { SignupResponse } from '../../types/users/Users.types';

const SignUp = () => {
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

  return (
    <>
      <Link to="/">메인페이지로 이동</Link>
      <form onSubmit={(evt) => void handleSubmit(evt)}>
        <label htmlFor="ID">아이디: </label>
        <input type="text" name="user_id" id="ID" value={userId} onChange={(evt) => setUserId(evt.target.value)} />
        <label htmlFor="PASSWORD">비밀번호: </label>
        <input
          type="password"
          name="user_pw"
          id="PASSWORD"
          value={userPw}
          onChange={(evt) => setUserPw(evt.target.value)}
        />
        <label htmlFor="NICKNAME">닉네임: </label>
        <input
          type="text"
          name="user_nickname"
          id="NICKNAME"
          value={userNickname}
          onChange={(evt) => setUserNickname(evt.target.value)}
        />
        <button type="submit" className="border-2">
          제출
        </button>
      </form>
    </>
  );
};

export default SignUp;
