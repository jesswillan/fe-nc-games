import {Link} from 'react-router-dom';
import {formatDate} from '../utils/utils';

const ReviewCard = ({review, avatarUrl}) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <div className="reviewCard">
        <div className="avatarContainer">
          <img
            src={avatarUrl}
            alt="Review author avatar"
            className="avatarImg"
          />
        </div>
        <p className="reviewCardOwner">{review.owner}</p>
        <p className="reviewCardCategory">{review.category}</p>
        <p className="reviewCardCreated">
          Date: {review.created_at ? formatDate(review.created_at) : ''}
        </p>
        <p className="reviewCardTitle">{review.title}</p>
        <img
          src={review.review_img_url}
          alt="Review image."
          className="reviewCardImg"
        />
        <p className="reviewCardVotes">{review.votes} votes</p>
        <p className="reviewCardComment">{review.comment_count} comments</p>
      </div>
    </Link>
  );
};

export default ReviewCard;
