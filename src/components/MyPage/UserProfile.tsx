import useUser from '../../hooks/MyPage/useUser';

const UserProfile = () => {
  const { user } = useUser();

  return (
    <>
      <h1>반갑습니다, {user?.nickname}님.</h1>
    </>
  );
};

export default UserProfile;
