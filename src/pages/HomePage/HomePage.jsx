import useGetFilms from 'hooks/useGetFilms';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const { films, isLoading, error } = useGetFilms();
  return (
    <div className={css.home_page}>
      <h1 className={css.title}>Trending today:</h1>
      {isLoading && <p>Loading content...</p>}
      {error ? (
        <p className={css.error}>{error.message}</p>
      ) : (
        !isLoading &&
        films && (
          <ul className={css.films_list}>
            {films.map(film => {
              return (
                <Link className={css.item} to={`/movies/${film.id}`} key={film.id}>
                  <p className={css.film_title}>{film.title}</p>
                </Link>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
};

export default HomePage;
