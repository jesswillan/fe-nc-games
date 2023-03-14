import {useState, useEffect} from 'react';
import {getReviews, getUsers} from '../utils/api';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getReviews(), getUsers()]).then(([reviewsData, usersData]) => {
      setReviews(reviewsData);
      setUsers(usersData);
    });
    setIsLoading(false);
  });

  const getAvatar = (reviewOwner) => {
    const user = users.find((user) => user.username === reviewOwner);
    return user ? user.avatar_url : null;
  };

  return (
    <main className="reviewListBox">
      <ul className="reviewList">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.review_id}
              review={review}
              avatarUrl={getAvatar(review.owner)}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
