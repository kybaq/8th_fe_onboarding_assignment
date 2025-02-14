import { Link, Outlet } from 'react-router';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { Post } from './types/posts/Posts.types';
import useAuthStore from './stores/useAuth';
import LogoutButton from './components/Logout/LogoutButton';

export default function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  const { isPending, error, data } = useQuery<Post>({
    queryKey: ['data'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()),
  });

  if (isPending) return <div>데이터를 요청하는 중...</div>;
  else if (error) return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <>
      <header>
        <h1 className="text-2xl mb-1">{data.title}</h1>
        <LogoutButton />
      </header>
      <section>
        <div>
          <Link to="signup" className="underline">
            회원가입하기
          </Link>
        </div>
        <div>
          <Link to="login" className="underline">
            로그인 하기
          </Link>
        </div>
        <div>
          <Link to="mypage" className={`underline ${accessToken ? 'block' : 'hidden'}`}>
            마이페이지
          </Link>
        </div>
      </section>
      <Outlet />
    </>
  );
}
