import { Outlet } from 'react-router';
import './App.css';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}
