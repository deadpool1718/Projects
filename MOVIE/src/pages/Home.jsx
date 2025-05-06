import MovieCard from "../assets/components/MovieCard";
import "./Home.css"

import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick, 2020" },
    { id: 2, title: "Matrix, 2022" },
    { id: 3, title: "Anihilation, 2023" },
    { id: 4, title: "Godzilla:The King Of Monster, 2023" },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("------")
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movie-card">
        {movies.map((movie) => 
          (<MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
