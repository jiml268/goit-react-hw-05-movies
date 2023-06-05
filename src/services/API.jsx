const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '284a0361af0f19810108b41baa563813';

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  const res_1 = await res.json();
  return res_1.results;
};

export async function getSearchMovies(searchQuery) {
  const res = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`);
  const res_1 = await res.json();
  return res_1.results;
};

export async function getMovieDetails(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return await res.json();
};

export async function getMovieDetailsCast(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  const res_1 = await res.json();
  return res_1.cast;
};

export async function getMovieDetailsReviews(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return await res.json();
  
};

export async function getMovieGenres() {
  const res = await fetch(`${BASE_URL}genre/movie/list?language=en&api_key=${API_KEY}`);
  return await res.json();
  
};