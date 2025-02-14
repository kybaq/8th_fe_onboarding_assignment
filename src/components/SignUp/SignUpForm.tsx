import useSignUp from '../../hooks/SignUp/useSignUp';

const SignUpForm = () => {
  const { userId, setUserId, userPw, setUserPw, userNickname, setUserNickname, handleSubmit } = useSignUp();

  return (
    <>
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
      <div>SignUpForm</div>
    </>
  );
};

export default SignUpForm;
