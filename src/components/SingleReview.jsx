import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCommentsByReviewId, getReviewById, getUsers} from '../utils/api';
import findAvatar, {formatDate} from '../utils/utils';
import Comments from './Comments';
import BackButton from './BackButton';
import CommentForm from './CommentForm';
import VoteButton from './VoteButton';
import CommentFeedback from './CommentFeedback';

const SingleReview = () => {
  const {review_id} = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [users, setUsers] = useState([]);
  const [voted, setVoted] = useState(0);
  const [feedBack, setFeedback] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    // setIsLoading(true);
    window.scrollTo(0, 0);
    Promise.all([getReviewById(review_id), getUsers(), getCommentsByReviewId(review_id)]).then(
      ([reviewData, usersData, commentsData]) => {
        setSingleReview(reviewData);
        setUsers(usersData);
        setComments(commentsData);
      }
    );
    // setIsLoading(false);
  }, []);

  return (
    <div className='singleReviewContent'>
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
          <p className="reviewCardOwner">{singleReview.owner}</p>
          <p className="reviewCardCategory">{singleReview.category}</p>
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
          <VoteButton
            singleReview={singleReview}
            setSingleReview={setSingleReview}
            voted={voted}
            setVoted={setVoted}
          />
          <p className="reviewCardComment">
            Comments: {singleReview.comment_count}
          </p>
        </div>
        <CommentForm review_id={review_id} setFeedback={setFeedback} comments={comments} setComments={setComments} />
        <CommentFeedback feedBack={feedBack} />
        <Comments review_id={review_id} comments={comments} />
      </div>
    </div>
  );
};

export default SingleReview;
