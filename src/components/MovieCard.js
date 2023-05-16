import React from 'react';
import Rate from './Rate';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-rating">{movie.rating}</div>
      <img src={movie.posterURL} alt="..." style={{heigth:"150px", width:"150px"}}/>
      <div className="movie-description">{movie.description}
      <Rate rating={movie.rating} />
      <h4 className="movie-title">{movie.title}</h4>
        </div>
    </div>
  );
};

export default MovieCard; 
