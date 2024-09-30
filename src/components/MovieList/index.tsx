import MovieCard from "../MovieCard";
import { movieProps } from "../../type";
import "./movie-list.css";

function MovieList({ movies }: movieProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
