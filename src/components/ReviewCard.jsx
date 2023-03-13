import {useState} from 'react';

const ReviewCard = ({review, avatarUrl}) => {
  return (
    <div className="reviewCard">
      <img src={avatarUrl} alt="Review author avatar" id="userAvatar" />
      <h3 id="reviewOwner">{review.owner}</h3>
      <p id="reviewTitle">{review.title}</p>
      <img src={review.review_img_url} alt="Review image." id="reviewImg" />
      <p id='votes'>Votes: {review.votes}</p>
      <p id='comments'>Comments: {review.comment_count}</p>
    </div>
  );
};

export default ReviewCard;
