const CommentCard = ({comment, avatar}) => {
  return (
    <div className='commentCard'>
      <img src={avatar} alt='Comment author avatar'
      />
      <p>{comment.author}</p>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentCard