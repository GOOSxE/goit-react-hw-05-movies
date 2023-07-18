import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import fetchMovieDetails from 'API/movieDetailsAPI';
import css from './MovieDetails.module.css';
const MovieCast = lazy(() => import('pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieReviews/MovieReviews'));
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  const location = useLocation();
  const goBackButtonHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (!postId) return;
    const fetchMovieDetailsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(postId);
        if (data.length === 0) {
          alert('Oops! Something went wrong!');
          throw new Error('Oops! Something went wrong!');
        } else {
          setMovieDetails(data);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetailsData();
  }, [postId]);
  return (
    <div className={css.details_page}>
      <Link className={css.goback_btn} to={goBackButtonHref.current}>
        Go back
      </Link>
      {error ? (
        <p>{error.message}</p>
      ) : (
        !isLoading &&
        movieDetails && (
          <div className={css.movie_details}>
            <a className={css.movie_poster} href={movieDetails.homepage}>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://www.themoviedb.org/t/p/original/${movieDetails.poster_path}`
                    : defaultImg
                }
                alt=""
                width="300px"
              />
            </a>
            <h3 className={css.title}>
              {movieDetails.title} {`(${movieDetails.release_date.slice(0, 4)})`}
            </h3>
            <p className={css.score}>
              User score: {(movieDetails.vote_average.toFixed(1) / 10) * 100}%
            </p>
            <div className={css.overview}>
              <h4>Overview:</h4>
              <p>{movieDetails.overview}</p>
            </div>
            <div className={css.genres}>
              <ul className={css.genres_list}>
                <h4>Genres:</h4>
                {movieDetails.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
            <h4 className={css.info_title}>Additional information:</h4>
            <ul className={css.additional_info}>
              <li className={css.info_item}>
                <NavLink className={css.info_link} to="cast">
                  Cast
                </NavLink>
              </li>
              <li className={css.info_item}>
                <NavLink className={css.info_link} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        )
      )}
      <Suspense fallback="Loading content...">
        <Routes>
          <Route path="cast" element={<MovieCast></MovieCast>}></Route>
          <Route path="reviews" element={<MovieReviews></MovieReviews>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
export default MovieDetails;
