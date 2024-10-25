import { useState } from "react";
export default function Card({ FetchImageFunction , cardName, URL }) {
  const [fetchedImage, setFetchedImage] = useState("");

//   const imageUrl = () => FetchImageFunction("fsEaZldNC8A1PJ3mwp");
//   console.dir(imageUrl);

  return (
    <div className="projectCardsContainer">
      <div className="projectDiv">
    
        <img src={URL} alt={cardName} />
        <h2>{cardName}</h2>
      </div>
    </div>
  );
}
