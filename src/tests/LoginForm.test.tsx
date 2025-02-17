/**
 * @file LoginForm.test.tsx
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../components/Login/LoginForm';
import { act } from 'react';

describe('LoginForm', () => {
  test('컴포넌트가 정상적으로 렌더링된다', () => {
    act(() => {
      render(<LoginForm />);
    });

    // 아이디 입력 필드
    const userIdInput = screen.getByLabelText('아이디:');
    expect(userIdInput).toBeInTheDocument();

    // 비밀번호 입력 필드
    const userPwInput = screen.getByLabelText('비밀번호:');
    expect(userPwInput).toBeInTheDocument();

    // 제출 버튼
    const submitButton = screen.getByRole('button', { name: '제출' });
    expect(submitButton).toBeInTheDocument();
  });
});
