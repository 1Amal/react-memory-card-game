import { useState } from "react";
export default function Card({ imageTestData }) {
  const [fetchedImage, setFetchedImage] = useState("");
  //   console.log(imageTestData);
  const imageUrl = () => imageTestData("fsEaZldNC8A1PJ3mwp");
  console.dir(imageUrl);

  return (
    <div className="projectCardsContainer">
      <div className="projectDiv">
        {/* <h1>Card 1</h1> */}

        {/* <img src={imageUrl} alt="CSS Image" /> */}
        <p>Image of CSS</p>
      </div>
    </div>
  );
}
