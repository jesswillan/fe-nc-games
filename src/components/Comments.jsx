import { getCommentsByReviewId } from '../utils/api'
import {useEffect, useState} from 'react'
import CommentCard from './CommentCard'

const Comments = ({review_id}) => {

  const [comments, setComments] = useState([])

  console.log(review_id, '<<<review_id')
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsData) => {
      console.log(commentsData, '<<commentsData');
      setComments(commentsData);
    });
  }, [review_id])
// console.log(comments, '<<<comments')
  return (
    <div className='commentsContainer'>
      <ul className='commentsList'>
        {comments.map((comment) => {
          return (
            console.log(comment, '<<comment')
            // <CommentCard key={comment.comment_id} comment={comment} />
          );
        })}
      </ul>
    </div>
  )
}

export default Comments