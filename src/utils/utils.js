const findAvatar = (reviewOwner, users) => {
  const user = users.find((user) => user.username === reviewOwner);
  return user ? user.avatar_url : null;
};

export default findAvatar;
