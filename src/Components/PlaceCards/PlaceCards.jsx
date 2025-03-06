import React from "react";
import { useNavigate } from "react-router-dom";
import placesData from "../../data.json";

function PlaceCards() {
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Restoran va kafelar</h1>
        <div className="MapCards">
          {placesData.map((item) => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              {item.km && <p>{item.km} km</p>}
              <button onClick={() => handleReadMore(item.path)}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PlaceCards;
