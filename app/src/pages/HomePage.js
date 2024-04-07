import React, { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';
import MovieSearch from '../components/MovieSearch';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch movies from the backend API
    fetch('/api/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search API call to get filtered movies
  };

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
        const updatedMovies = movies.map((movie) =>
          movie.id === movieId ? { ...movie, rating: data.rating } : movie
        );
        setMovies(updatedMovies);
      });
  };

  const filteredMovies = searchQuery
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  return (
    <div>
      <h1>Movie Browser</h1>
      <MovieSearch onSearch={handleSearch} />
      <MovieGrid movies={filteredMovies} onRateMovie={handleRateMovie} />
    </div>
  );
}

export default HomePage;