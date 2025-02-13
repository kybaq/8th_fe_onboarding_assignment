import { Link } from 'react-router';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
  return (
    <>
      <h1 className="text-xl">Login</h1>
      <div>
        <Link to="/">메인페이지로 이동</Link>
      </div>
      <div>
        <Link to="signup">회원가입하기</Link>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
