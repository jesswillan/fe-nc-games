import { useEffect, useState } from 'react'
import { postComment } from '../utils/api'

const CommentForm = ({review_id, setFeedback}) => {
const [username, setUsername]= useState('')
const [comment, setComment] = useState('')
const [commentBody, setCommentBody] = useState('')
// const [feedBack, setFeedback] = useState('')

// console.log(commentBody, '<<<comment body')

const handleSubmit = (event) => {
  event.preventDefault();
  setCommentBody({username: username, body: comment})
}

useEffect(() => {
  if (commentBody !== '') {
    postComment(review_id, commentBody)
      .then((response) => {
        console.log(response, 'res in comment form');
        setFeedback(response)
      })
      .catch((err) => {
        console.log(err, 'err in comment form');
        setFeedback(err,)
      });
  }
})

  return (
    <form className='CommentForm' onSubmit={handleSubmit} >
      <label>Username<input type='text' onChange={(event) => setUsername(event.target.value)} ></input></label>
      <label>Comment<input type='text' onChange={(event) => setComment(event.target.value)} ></input></label>
      <button type='submit' >Add Comment</button>
    </form>
  )
}

export default CommentForm