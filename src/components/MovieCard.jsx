import React from "react";

const MovieCard = ({ movie }) => {
  // If the movie poster is not available (N/A), use a static image URL as a fallback
  const posterImage =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

  return (
    <div className="movie">
      {/* Display the movie's release year */}
      <div>
        <p>{movie.Year}</p>
      </div>
      {/* Display the movie poster (or fallback image if not available) */}
      <div>
        <img
          src={posterImage}
          alt={movie.title}
          onError={(event) => {
            // If the image fails to load, set the fallback image URL
            event.target.onerror = null; // Prevent infinite fallback loop
            event.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
          }}
        />
      </div>
      {/* Display the movie type and title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
