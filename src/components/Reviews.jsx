import {useState} from 'react';
import ReviewList from './ReviewList';

const Reviews = () => {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <ReviewList />
    </div>
  );
};

export default Reviews;
