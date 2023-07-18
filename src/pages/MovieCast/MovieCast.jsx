import fetchMovieCast from 'API/MovieCastAPI.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    if (!postId) return;
    const fetchMovieCastData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieCast(postId);
        if (data.cast.length === 0) {
          alert('There is no cast information!');
          throw new Error('There is no cast information!');
        } else {
          setMovieCast(data.cast);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCastData();
  }, [postId]);
  return (
    <div className={css.cast_wrap}>
      <h2 className={css.title}>Movie Cast:</h2>
      {isLoading && <p>Loading content...</p>}
      {error ? (
        <p>{error.message}</p>
      ) : (
        !isLoading &&
        movieCast?.length > 0 && (
          <ul className={css.cast_list}>
            {movieCast.map(actor => {
              const { credit_id, name, character, profile_path } = actor;
              return (
                <li className={css.cast_item} key={credit_id}>
                  <img
                    className={css.cast_poster}
                    src={
                      profile_path
                        ? `https://www.themoviedb.org/t/p/original/${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                    width={'150px'}
                  />
                  <div className={css.actor_info}>
                    <p className={css.actor_name}>
                      <span className={css.name_span}>Name:</span>
                      <span className={css.name_span}>{name}</span>
                    </p>
                    <p className={css.actor_name}>
                      <span className={css.name_span}>Character:</span>
                      <span className={css.name_span}>{character}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
};

export default MovieCast;
