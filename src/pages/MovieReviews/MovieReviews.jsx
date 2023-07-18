import fetchMovieReviews from 'API/movieReviewsAPI';
import React, { useEffect, useState } from 'react';
import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    if (!postId) return;
    const fetchMovieReviewsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(postId);
        if (data.results.length === 0) {
          throw new Error('There is no reviews information!');
        } else {
          setMovieReviews(data.results);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviewsData();
  }, [postId]);
  return (
    <div className={css.reviews_wrap}>
      <h2 className={css.title}>Movie reviews:</h2>
      {isLoading && <p>Loading content...</p>}
      {error !== null && <p>{error.message}</p>}
      {!isLoading && movieReviews?.length > 0 && (
        <ul className={css.reviews_list}>
          {movieReviews.map(review => {
            const { id, author, content } = review;
            return (
              <li className={css.reviews_item} key={id}>
                <p className={css.author}>Author: "{author}"</p>
                <p className={css.content}>"{content}"</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
