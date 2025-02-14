import { useEffect, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import { User } from '../../types/users/Users.types';
import useAuthStore from '../../stores/useAuth';

const useUser = () => {
  const [user, setUser] = useState<User>(null);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const handleUserProfile = async (token: string | null) => {
      if (token) {
        try {
          const response = await axiosInstance.get<User>('/user', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          return;
        } catch (error) {
          console.error('회원 정보를 가져오는데 오류가 발생했습니다.', error);
        }
      }
    };

    void handleUserProfile(accessToken);
  }, [accessToken]);

  return { user };
};

export default useUser;
