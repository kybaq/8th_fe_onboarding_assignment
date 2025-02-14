import useLogout from '../../hooks/Login/useLogout';
import useAuthStore from '../../stores/useAuth';

const LogoutButton = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const { handleLogout } = useLogout();

  return (
    <button className={`underline ${accessToken ? 'block' : 'hidden'}`} onClick={handleLogout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
