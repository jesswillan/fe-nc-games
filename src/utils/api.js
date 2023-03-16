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
    return data.users;
  });
};

export const getCommentsByReviewId = (id) => {
  return reviewsApi.get(`/reviews/${id}/comments`).then(({data}) => {
    return data.comments;
  });
};

export const voteForReview = (id) => {
  return reviewsApi
    .patch(`reviews/${id}`, {
      inc_votes: 1,
    })
    .then(({data}) => {
      return data;
    });
};
