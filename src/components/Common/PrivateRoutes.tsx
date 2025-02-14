import { Link } from 'react-router';
import useAuthStore from '../../stores/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  // 인증 여부 확인
  if (!accessToken) {
    return (
      <>
        <h3 className="text-2xl">로그인이 필요합니다.</h3>
        <Link to="login" className="underline">
          로그인하러 가기
        </Link>
      </>
    );
  }

  return children;
};

export default PrivateRoute;
