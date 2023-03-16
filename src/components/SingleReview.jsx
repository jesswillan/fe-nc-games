import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getReviewById, getUsers} from '../utils/api';
import findAvatar, {formatDate} from '../utils/utils';
import Comments from './Comments';
import BackButton from './BackButton';
import CommentForm from './CommentForm';
import VoteButton from './VoteButton';

const SingleReview = () => {
  const {review_id} = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [users, setUsers] = useState([]);
  const [voted, setVoted] = useState(0);

  useEffect(() => {
    // setIsLoading(true);
    window.scrollTo(0, 0);
    Promise.all([getReviewById(review_id), getUsers()]).then(
      ([reviewData, usersData]) => {
        setSingleReview(reviewData);
        setUsers(usersData);
      }
    );
    // setIsLoading(false);
  }, []);
  return (
    <div className="reviewContainer">
      <BackButton />
      <div className="reviewCard">
        <div className="avatarContainer">
          <img
            src={findAvatar(singleReview.owner, users)}
            alt="Review author avatar"
            className="avatarImg"
          />
        </div>
        <h3 className="reviewCardOwner">{singleReview.owner}</h3>
        <p className="reviewCardCategory">Category: {singleReview.category}</p>
        <p className="reviewCardCreated">
          Date:{' '}
          {singleReview.created_at ? formatDate(singleReview.created_at) : ''}
        </p>
        <p className="reviewCardTitle">{singleReview.title}</p>
        <img
          src={singleReview.review_img_url}
          alt="Review image."
          className="reviewCardImg"
        />
        {/* <p className="reviewCardVotes">Votes: {singleReview.votes + voted}</p> */}
      <VoteButton singleReview={singleReview} setSingleReview={setSingleReview} voted={voted} setVoted={setVoted} />
        <p className="reviewCardComment">
          Comments: {singleReview.comment_count}
        </p>
      </div>
      <CommentForm review_id={review_id} />
      <Comments review_id={review_id} />
    </div>
  );
};

export default SingleReview;
