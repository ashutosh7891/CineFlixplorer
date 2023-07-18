import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./Search.svg";
import MovieCard from "./MovieCard";

// API key for the movie app used below
const API_URL = "http://www.omdbapi.com?apikey=6b878714";

const App = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch movies based on the search title using the OMDB API
  const movieSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // Fetch movies with "spiderman" as the initial search term when the component mounts
  useEffect(() => {
    movieSearch("spiderman");
  }, []);

  return (
    <div className="app">
      {/* Page Title */}
      <h1>CineFlixplorer</h1>

      {/* Search Bar */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => movieSearch(searchTerm)}
        />
      </div>

      {/* Render Movie Cards */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* Map through the list of movies and create a MovieCard for each */}
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.imdbID} />;
          })}
        </div>
      ) : (
        // If no movies are found, display a message
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
