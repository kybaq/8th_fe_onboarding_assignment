import { Link } from 'react-router';
import SignUpForm from '../../components/SignUp/SignUpForm';

const SignUp = () => {
  return (
    <>
      <Link to="/">메인페이지로 이동</Link>
      <SignUpForm />
    </>
  );
};

export default SignUp;
