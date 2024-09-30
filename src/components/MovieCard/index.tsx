import { singleMovieProps } from "../../type";
import Rating from "../Rating";
import "./movie-card.css";

function MovieCard({ movie }: singleMovieProps) {
  return (
    <div className="movie-card-div">
      <img src={movie.imagePath} alt={movie.title} />
      <div className="card-text">
        <span>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
        </span>

        <p>{movie.storyline}</p>
      </div>
      <hr />
      <Rating rating={movie.rating} />
    </div>
  );
}

export default MovieCard;
