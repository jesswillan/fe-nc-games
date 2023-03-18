import {useState, useEffect} from 'react';
import {getReviews, getUsers} from '../utils/api';
import ReviewCard from './ReviewCard';
import findAvatar from '../utils/utils';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    Promise.all([getReviews(), getUsers()]).then(([reviewsData, usersData]) => {
      setReviews(reviewsData);
      setUsers(usersData);
    });
    // setIsLoading(false);
  }, []);

  return (
    <main className="reviewListBox">
      <ul className="reviewContainer">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.review_id}
              review={review}
              avatarUrl={findAvatar(review.owner, users)}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
