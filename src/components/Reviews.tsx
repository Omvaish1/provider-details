import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    <div>
      <div className="reviews">
        <h5>Reviews</h5>
        <div className="card-holder">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="button">
        <button>Book Now</button>
      </div>
    </div>
  );
}
