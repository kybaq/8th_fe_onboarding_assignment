import { Outlet } from 'react-router';
import './App.css';
import { useQuery } from '@tanstack/react-query';
interface Post {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

export default function App() {
  const { isPending, error, data } = useQuery<Post[]>({
    queryKey: ['data'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()),
  });

  if (isPending) return <div>데이터를 요청하는 중...</div>;
  else if (error) return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>{data.map((el) => el.title)}</div>
      <Outlet />
    </>
  );
}
