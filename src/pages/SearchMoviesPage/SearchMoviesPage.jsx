import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './SearchMoviesPage.module.css';
import fetchMoviesByTitle from 'API/searchMoviesAPI';
import SearchBar from 'components/SearchBar/SearchBar';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const SearchMoviesPage = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState(searchParams.get('query') || null);
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onFormSubmit = q => {
    if (query !== q) {
      setQuery(q);
      if (q !== '' || q !== null) {
        setSerchParams({
          query: q,
        });
      }
      setFilms([]);
      setError(null);
    } else if (query === q) {
      alert('Не можна вводити одне й те саме!');
    }
  };
  useEffect(() => {
    const fetchMoviesData = async () => {
      if (query === null) return;
      if (query === '') {
        alert('Поле пошуку не може бути пустим!');
        return;
      } else {
        setIsLoading(true);
        try {
          const data = await fetchMoviesByTitle(query);
          if (data.results.length === 0) {
            throw new Error('No films found!');
          } else {
            setFilms(data.results);
          }
        } catch (error) {
          setError(error);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchMoviesData();
  }, [query]);
  return (
    <div className={css.search_page}>
      <h2 className={css.title}>Movies Page</h2>
      <SearchBar onFormSubmit={onFormSubmit} />
      {isLoading && <p>Loading content...</p>}
      {error ? (
        <p>{error.message}</p>
      ) : (
        !isLoading &&
        films?.length > 0 && (
          <ul className={css.films_list}>
            {films.map(film => {
              return (
                <Link
                  className={css.item}
                  state={{ from: location }}
                  to={`/movies/${film.id}`}
                  key={film.id}
                >
                  <img
                    className={css.film_img}
                    src={
                      film.backdrop_path
                        ? `https://www.themoviedb.org/t/p/original/${film.backdrop_path}`
                        : defaultImg
                    }
                    alt={film.title}
                    width={'290px'}
                  />
                  <p className={css.film_title}>{`${film.title} (${film.release_date.slice(
                    0,
                    4
                  )})`}</p>
                </Link>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
};

export default SearchMoviesPage;
