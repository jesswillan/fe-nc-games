const findAvatar = (owner, users) => {
  const user = users.find((user) => user.username === owner);
  return user ? user.avatar_url : null;
};

export default findAvatar;
