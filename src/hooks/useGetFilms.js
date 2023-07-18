import fetchTrendingMovies from 'API/trendingMoviesAPI';
import { useEffect, useState } from 'react';

const useGetFilms = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies();
        if (data.results.length === 0) {
          alert('No trending films found!');
          throw new Error('No trending films found!');
        } else {
          setFilms(data.results);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMoviesData();
  }, []);
  return { films, isLoading, error };
};

export default useGetFilms;
