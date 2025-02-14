import { FormEvent, useState } from 'react';
import { axiosInstance } from '../../services/axios';
import useAuthStore from '../../stores/useAuth';
import { UserProfilePatch } from '../../types/users/Users.types';

const usePatch = () => {
  const [userNickname, setUserNickname] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>('');
  const formData = new FormData();
  const accessToken = useAuthStore((state) => state.accessToken);

  const handleProfile = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    formData.append('nickname', userNickname);
    formData.append('avatar', userAvatar);

    try {
      const response = await axiosInstance.patch<UserProfilePatch>('/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return console.log(response.data);
    } catch (error) {
      console.error('프로필 변경에 오류가 발생했습니다.', error);
    }
  };

  return { userNickname, setUserNickname, userAvatar, setUserAvatar, handleProfile };
};

export default usePatch;
