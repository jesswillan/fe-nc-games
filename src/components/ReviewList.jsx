import {useState, useEffect} from 'react';
import axios from 'axios';
import {getReviews} from '../utils/api';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsData) => {
      setReviews(reviewsData.reviews);
      setIsLoading(false);
    });
  });

  return <main>{isLoading ? <p>Loading...</p> : <p>Not loading</p>}</main>;
};

export default ReviewList;
