import { useEffect, useState } from 'react'

const CommentFeedback = (feedback) => {
  // console.log(response, 'res in commentfeedback')

  const [commentFeedback, setCommentFeedback] = useState('')

  useEffect(() => {
    if (feedback === 404) {
      setCommentFeedback('Your comment was successfully posted')
    }
  })
console.log(commentFeedback, 'feedback in feedback')
  return <p>{`${commentFeedback}`}</p>

}

export default CommentFeedback