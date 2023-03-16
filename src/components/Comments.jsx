import {getCommentsByReviewId, getUsers} from '../utils/api';
import {useEffect, useState} from 'react';
import CommentCard from './CommentCard';
import findAvatar from '../utils/utils';
import NoCommentCard from './NoCommentCard';

const Comments = ({review_id}) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([getCommentsByReviewId(review_id), getUsers()]).then(
      ([commentsData, usersData]) => {
        setComments(commentsData);
        setUsers(usersData);
      }
    );
  }, [review_id]);

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
