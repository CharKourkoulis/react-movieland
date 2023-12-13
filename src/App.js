import React, { useEffect, useState } from "react";
import { API_URL } from ".";
import "./App.css";
import SearchIcon from "./search.svg";
import { MovieCard } from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={() => {
            const delayInput = setTimeout(() => {
              searchMovies(searchTerm);
            }, 700);
            return () => clearTimeout(delayInput);
          }}
        />
        <img src={SearchIcon} alt="search" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Please type a valid movie title</h2>
        </div>
      )}
    </div>
  );
};

export default App;
