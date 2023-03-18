import { useEffect, useState } from 'react'
import { postComment } from '../utils/api'

const CommentForm = ({review_id, setFeedback, comments, setComments}) => {
const [username, setUsername]= useState('')
const [comment, setComment] = useState('')
const [commentBody, setCommentBody] = useState('')


const handleSubmit = (event) => {
  event.preventDefault();
  if (commentBody !== '') {
    postComment(review_id, commentBody)
    .then((response) => {
      console.log(response.data.comment)
      setFeedback(response.status);
      setComments((comments) => {
        return [response.data.comment, ...comments]
      })
    })
    .catch((err) => {
      setFeedback(err,)
    });
  }
}

useEffect(() => {
  setCommentBody({username: username, body: comment});
}, [username, comment])

  return (
    <form className='CommentForm' onSubmit={handleSubmit} >
      <label>Username<input type='text' required onChange={(event) => setUsername(event.target.value)} ></input></label>
      <label>Comment<input type='text' required onChange={(event) => setComment(event.target.value)} ></input></label>
      <button type='submit' >Add Comment</button>
    </form>
  )
}

export default CommentForm