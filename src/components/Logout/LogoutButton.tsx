import useLogout from '../../hooks/Login/useLogout';

const LogoutButton = () => {
  const { handleLogout } = useLogout();

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
