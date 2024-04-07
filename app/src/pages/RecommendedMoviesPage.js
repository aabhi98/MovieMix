import React, { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';

function RecommendedMoviesPage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Fetch recommended movies from the backend API
    fetch('/api/movies/recommended')
      .then((response) => response.json())
      .then((data) => setRecommendedMovies(data));
  }, []);

  const handleRateMovie = (movieId, rating) => {
    // Send rating data to the backend API
    fetch(`/api/movies/${movieId}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update local movie data with new rating
        const updatedMovies = recommendedMovies.map((movie) =>
          movie.id === movieId ? { ...movie, rating: data.rating } : movie
        );
        setRecommendedMovies(updatedMovies);
      });
  };

  return (
    <div>
      <h1>Recommended Movies</h1>
      <MovieGrid movies={recommendedMovies} onRateMovie={handleRateMovie} />
    </div>
  );
}

export default RecommendedMoviesPage;