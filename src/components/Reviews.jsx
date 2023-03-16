import {useState, useEffect} from 'react';
import ReviewList from './ReviewList';
const Reviews = () => {
  const [category, setCategory] = useState(null);
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
