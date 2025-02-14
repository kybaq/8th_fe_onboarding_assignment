import useAuthStore from '../../stores/useAuth';

const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return { handleLogout };
};

export default useLogout;
