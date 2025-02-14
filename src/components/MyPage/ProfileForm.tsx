import usePatch from '../../hooks/MyPage/usePatch';

const ProfileForm = () => {
  const { userNickname, setUserNickname, userAvatar, setUserAvatar, handleProfile } = usePatch();

  return (
    <form onSubmit={(evt) => void handleProfile(evt)}>
      <label htmlFor="NICKNAME"></label>
      <input
        name="user_nickname"
        id="NICKNAME"
        type="text"
        value={userNickname}
        onChange={(evt) => setUserNickname(evt.target.value)}
      />
      <label htmlFor="AVATAR"></label>
      <input
        name="user_avartar"
        id="AVATAR"
        type="file"
        accept="image/png, image/jpeg"
        value={userAvatar}
        onChange={(evt) => setUserAvatar(evt.target.value)}
      />
    </form>
  );
};

export default ProfileForm;
