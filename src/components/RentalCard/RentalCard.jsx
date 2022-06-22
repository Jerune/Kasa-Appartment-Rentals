import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function RentalCard({ picture, title, id }) {
  let navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/rentals/${id}`)} className="rental-card">
      <img src={picture} alt={title} />
      <div className="gradient-container"></div>
      <h2>{title}</h2>
    </div>
  );
}

RentalCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
