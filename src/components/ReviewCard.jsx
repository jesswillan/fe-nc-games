import {Link} from 'react-router-dom';

const ReviewCard = ({review, avatarUrl}) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <div className="reviewCardContainer">
        <div className="reviewCard">
          <div className="avatar">
            <img
              src={avatarUrl}
              alt="Review author avatar"
              id="reviewCardUserAvatar"
            />
          </div>
          <h3 className="reviewCardOwner">{review.owner}</h3>
          <p className="reviewCardTitle">{review.title}</p>
          <img
            src={review.review_img_url}
            alt="Review image."
            className="reviewCardImg"
          />
          <p className="reviewCardVotes">Votes: {review.votes}</p>
          <p className="reviewCardComment">Comments: {review.comment_count}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
