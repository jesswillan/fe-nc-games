const findAvatar = (owner, users) => {
  const user = users.find((user) => user.username === owner);
  return user ? user.avatar_url : null;
};

export const formatDate = (date) => {
  const regex = /\d{4}-\d{1,2}-\d{1,2}/;
  const extractDate = date.match(regex);
  return `${extractDate[0].slice(8, 10)}-${extractDate[0].slice(
    5,
    7
  )}-${extractDate[0].slice(0, 4)}`;
};

export default findAvatar;
