import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";
import Gallery from "../../components/Gallery/Gallery";
import Rating from "../../components/Rating/Rating";
import { defaultRentalData } from "../../services/defaultData";

export default function Rentals() {
  const [currentRental, setCurrentRental] = useState(defaultRentalData);
  const [isDataLoading, setDataLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    setDataLoading(true);
    fetch("/logements.json").then((response) =>
      response
        .json()
        .then((result) => {
          if (result.some((logement) => logement.id === params.rentalId)) {
            const thisRental = result.filter(
              (logement) => logement.id === params.rentalId
            )[0];
            setCurrentRental(thisRental);
          }
          setDataLoading(false);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  if (isDataLoading) {
    return (
      <main className="main">
        <p className="loading">Loading...</p>
      </main>
    );
  }

  if (currentRental.id === "") {
    return <Navigate to="/404" />;
  }

  return (
    <main className="main rentals">
      <Gallery images={currentRental.pictures} />
      <div className="rentals_generalInfo">
        <div className="rentals_nameLocationTags">
          <h1>{currentRental.title}</h1>
          <h3>{currentRental.location}</h3>
          <ul className="rentals_generalInfo_tags">
            {currentRental.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="rentals_ownerRating">
          <div className="rentals_ownerRating_owner">
            <h3>{currentRental.host.name}</h3>
            <img
              src={currentRental.host.picture}
              alt={currentRental.host.name}
            />
          </div>
          <ul className="rentals_ownerRating_rating">
            <Rating amountOfStars={currentRental.rating} />
          </ul>
        </div>
      </div>
      <section className="rentals_detailInfo">
        <InfoDropdown
          state="open"
          type="rentals"
          title="Description"
          content={currentRental.description}
        />
        <InfoDropdown
          state="open"
          type="rentals"
          title="Equipments"
          content={currentRental.equipments}
        />
      </section>
    </main>
  );
}
