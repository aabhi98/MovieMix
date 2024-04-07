import React from 'react';
import MovieCard from './MovieCard';

function MovieGrid({ movies, onRateMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onRateMovie={onRateMovie} />
      ))}
    </div>
  );
}

export default MovieGrid;