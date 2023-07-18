const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZhZGQ2ZTM1NzZhYzczYTI5YTBiZGQzY2QxODg0YyIsInN1YiI6IjY0YjI2NWJmMjNkMjc4MDEyNjE5ZTA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3G83-ZE9yN2ZrJDadqJ_dUGn7iM-UGUP6UdVEl0aij0',
  },
};
const fetchMovieCast = async movieId => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  const data = await response.json();
  return data;
};
export default fetchMovieCast;
