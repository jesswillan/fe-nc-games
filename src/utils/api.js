import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://nc-games-be-project-pfoe.onrender.com/api',
});

export const getReviews = () => {
  return reviewsApi.get('/reviews').then(({data}) => {
    return data.reviews;
  });
};

export const getReviewById = (id) => {
  return reviewsApi.get(`/reviews/${id}`).then(({data}) => {

    return data.review;
  });
};

export const getUsers = () => {
  return reviewsApi.get('/users').then(({data}) => {
    return data.users
  })
}


