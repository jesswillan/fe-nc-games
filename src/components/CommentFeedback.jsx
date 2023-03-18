import { useEffect, useState } from 'react'

const CommentFeedback = (feedback) => {


  const [commentFeedback, setCommentFeedback] = useState('')

  useEffect(() => {
    if (feedback.feedback === 404) {
      setCommentFeedback('Please enter a valid username!');
    } else if (feedback.feedback === 201) {
      setCommentFeedback('Your comment was successfully added!')
    } else {

      setCommentFeedback('')
    }

  }, [feedback])

  return <p>{`${commentFeedback}`}</p>

}

export default CommentFeedback