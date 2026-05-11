import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Cast from "./components/Cast/Cast.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(
  () => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"),
);
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound.jsx"));
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
