import "./rating.css";

type ratingProps = {
  rating: number;
};

function Rating(rating: ratingProps) {
  return (
    <div className="div-rating">
      <p className="rating">Rating</p>
      <span>{JSON.stringify(rating.rating)}</span>
    </div>
  );
}

export default Rating;
