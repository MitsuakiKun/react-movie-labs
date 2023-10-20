import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getUpcomingMovies()
        .then((upcomingMovies) => {
          setMovies(upcomingMovies);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching upcoming movies:", error);
          setLoading(false);
        });
    }, []);
  
    const selectFavorite = () => true;
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        loading={loading}
        selectFavorite={selectFavorite}
      />
    );
  };
  
  export default UpcomingMoviesPage;