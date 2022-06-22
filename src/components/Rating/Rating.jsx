import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ amountOfStars }) {
  const ratingNumber = amountOfStars;
  let ratingArray = [];
  for (let i = 0; ratingNumber > i; i++) {
    ratingArray.push(
      <li key={i}>
        <FontAwesomeIcon icon={faStar} />
      </li>
    );
  }
  for (let i = 5; ratingNumber < i; i--) {
    ratingArray.push(
      <li key={i} className="empty">
        <FontAwesomeIcon icon={faStar} />
      </li>
    );
  }
  return <>{ratingArray}</>;
}
