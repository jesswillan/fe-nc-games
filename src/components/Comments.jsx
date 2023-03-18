import {getUsers} from '../utils/api';
import {useEffect, useState} from 'react';
import CommentCard from './CommentCard';
import findAvatar from '../utils/utils';
import NoCommentCard from './NoCommentCard';

const Comments = ({comments}) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="commentsContainer">
      {comments.length === 0 ? (
        <NoCommentCard />
      ) : (
        <ul className="commentsList">
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                avatar={findAvatar(comment.author, users)}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Comments;
