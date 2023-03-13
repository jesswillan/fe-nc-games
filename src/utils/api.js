import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://nc-games-be-project-pfoe.onrender.com/api',
});

export const getReviews = () => {
  return reviewsApi.get('/reviews').then(({data}) => {
    return data.reviews;
  });
};
