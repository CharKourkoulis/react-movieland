import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/404"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <span>{movie.Title} - </span>
        <span>{movie.Year}</span>
      </div>
    </div>
  );
};
