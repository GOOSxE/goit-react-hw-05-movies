import Header from 'components/header/header';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const SearchMoviesPage = lazy(() => import('pages/SearchMoviesPage/SearchMoviesPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Suspense fallback="Loading content...">
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/movies" element={<SearchMoviesPage></SearchMoviesPage>}></Route>
            <Route path="/movies/:postId/*" element={<MovieDetails></MovieDetails>}></Route>
            <Route path="*" element={<HomePage></HomePage>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
export default App;
