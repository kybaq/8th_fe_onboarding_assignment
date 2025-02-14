import { create } from 'zustand';
import { AuthState } from '../types/users/Users.types';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      accessToken: localStorage.getItem('accessToken'),
      login: (token) => {
        localStorage.setItem('accessToken', token);
        set({ accessToken: token });
      },
      logout: () => {
        localStorage.removeItem('accessToken');
        set({ accessToken: null });
      },
    }),
    { name: 'userAuthStorage' },
  ),
);

export default useAuthStore;
