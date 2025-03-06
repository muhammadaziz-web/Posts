import React from "react";
import { useNavigate } from "react-router-dom";


function MapCards() {

    const navigate = useNavigate();

    const handleReadMore = (title) => {
      navigate(`/maps/${title.toLowerCase().replace(/\s+/g, '-')}`);
    };

    const Cards = [
        {
          id: 1,
          title: "Anjir Rossiya",
          km: "2.03 km"
        },
        {
          id: 2, 
          title: "Anor Rossiya",
          km: "2.03 km"
        },
        {
          id: 3,
          title: "Bek Osiyo Yakkasaroy",
          km: "0.22 km"
        },
        {
          id: 4,
          title: "Besh Qozon Glinka",
          km: "0.93 km"
        },
        {
          id: 5,
          title: "Bosphorus Viaport",
          km: "0.97 km"
        },
        {
          id: 6,
          title: "Chor minor",
          km: "1.63 km"
        },
        {
          id: 7,
          title: "Donerci hamdi usta Glinka",
          km: "0.86 km"
        },
        {
          id: 8,
          title: "Mar Mar Rossiya",
          km: "1.77 km"
        },
        {
          id: 9,
          title: "Qanotchi Qushbegi",
          km: "1.46 km"
        },
        {
          id: 10,
          title: "Sim Sim Muqimiy",
          km: "1.9 km"
        }
      ];

  return (
    <>
        <div className="container">
            <h1>
                Restoran va kafelar
            </h1>
            <div className="MapCards">
                {Cards.map((item) => ( 
                    <div key={item.id} className="card">
                        <h2>{item.title}</h2>
                        <p>{item.km}</p>
                        <button onClick={() => handleReadMore(item.title)}>Read More</button>
                    </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default MapCards;