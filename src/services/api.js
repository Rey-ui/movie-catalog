import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDlmMWQ5YzUwODExYTAyM2ZlODNlYzNmMjc0MTdkOSIsInN1YiI6IjY1ZmVjYTA0MDQ3MzNmMDE3ZGVjOGQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgymQKaHGxjCiVowtdo-t4DT1DQrhgqs9biItBT-NRA",
  },
};
async function fethTrendingMovies(controller, interval = "day", page = 1) {
  const response = await axios.get(`/trending/movie/${interval}?page=${page}`, {
    ...options,
    signal: controller.signal,
  });
  return response.data;
}
async function fethMovie(movieId) {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
}
async function fethCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data;
}
async function fethReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data;
}
async function fethMoviesByQuery(query) {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data;
}
export {
  fethTrendingMovies,
  fethMovie,
  fethCast,
  fethReviews,
  fethMoviesByQuery,
};
