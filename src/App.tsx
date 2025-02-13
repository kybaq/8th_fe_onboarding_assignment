import { Link, Outlet } from 'react-router';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { Post } from './types/posts/Posts.types';

export default function App() {
  const { isPending, error, data } = useQuery<Post>({
    queryKey: ['data'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()),
  });

  if (isPending) return <div>데이터를 요청하는 중...</div>;
  else if (error) return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <>
      <h1 className="text-2xl mb-1">{data.title}</h1>
      <Link to="signup" className="underline">
        회원가입하기
      </Link>
      <Link to="login" className="underline">
        로그인 하기
      </Link>
      <Outlet />
    </>
  );
}
