import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    <div className="reviews">
      <h5>Reviews</h5>
      <div className="card-holder">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
