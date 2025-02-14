import { Link } from 'react-router';
import useAuthStore from '../../stores/useAuth';

const PublicRoutes = ({ children }: { children: JSX.Element }) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  // 인증 여부 확인
  if (accessToken) {
    return (
      <>
        <h3 className="text-2xl">로그인이 되어있는 상태입니다.</h3>
        <div>
          <Link to="/" className="underline">
            메인페이지
          </Link>
        </div>
        <div>
          <Link to="mypage" className="underline">
            마이페이지
          </Link>
        </div>
      </>
    );
  }

  return children;
};

export default PublicRoutes;
