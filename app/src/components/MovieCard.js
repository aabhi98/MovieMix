import React from 'react';
import RatingStars from './RatingStars';

function MovieCard({ movie, onRateMovie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <RatingStars value={movie.rating} onChange={(rating) => onRateMovie(movie.id, rating)} />
    </div>
  );
}

export default MovieCard;