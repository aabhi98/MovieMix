import React, { useState } from 'react';

function MovieSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div class="HomePage__searchContainer">
      <input class="HomePage__searchInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button class="HomePage__searchButton" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default MovieSearch;