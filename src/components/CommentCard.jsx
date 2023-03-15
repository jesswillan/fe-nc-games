const CommentCard = ({comment, avatar}) => {
  return (
    <div className="commentCard">
      <div className="avatarContainer">
        <img src={avatar} alt="Comment author avatar" className="avatarImg" />
      </div>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
