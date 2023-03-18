import {useEffect} from 'react';
import ReviewList from './ReviewList';
const Reviews = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <ReviewList />
    </div>
  );
};

export default Reviews;
