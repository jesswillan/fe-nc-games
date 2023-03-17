import { useEffect, useState } from 'react'

const CommentFeedback = (feedback) => {


  const [commentFeedback, setCommentFeedback] = useState('')

  useEffect(() => {
    if (feedback.feedBack === 404) {
      setCommentFeedback('Please enter a valid username!');
    } else if (feedback.feedBack === 201) {
      setCommentFeedback('Your comment was successfully added!')
    } else {

      setCommentFeedback('')
    }

  }, [feedback])

  return <p>{`${commentFeedback}`}</p>

}

export default CommentFeedback