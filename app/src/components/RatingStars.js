import React from 'react';

function RatingStars({ value, onChange }) {
  const handleClick = (rating) => {
    onChange(rating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((rating) => (
        <span
          key={rating}
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick(rating)}
        >
          {rating <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default RatingStars;