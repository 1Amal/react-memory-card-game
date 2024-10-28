import { useState } from "react";

import ScoreBoard from "./ScoreBoard.jsx";
import Introduction from "./Introduction.jsx";
import CardsContainer from "./CardsContainer.jsx";
import Card from "./Card.jsx";
// import App from "./App.jsx";

// import {main} from './Main'

export default function GameLogic() {
  const [fetchedImage, setFetchedImage] = useState("");

  const [scoreBoardObject,setScoreBoardObject]=useState({currentScore:0,bestScore:0});
  

 

  async function FetchImage(imageRequired) {
    let imageID = "kH1DBkPNyZPOk0BxrM";

    fetch(
      `https://api.giphy.com/v1/gifs/${imageID}?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&rating=g`,
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        let returnedImageURL = response.data.images.downsized_medium.url;

        setFetchedImage(returnedImageURL);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div>
      {/* <h1>Game Logic Component</h1> */}

      {/* <button onClick={() => FetchImage()}>Fetch Image</button>
      <img src={fetchedImage} alt="Fetched Image" />  */}

      <ScoreBoard scoreBoardObject={scoreBoardObject} />
      <Introduction />
      <CardsContainer FetchImageFunction={FetchImage} scoreBoardObject={scoreBoardObject} setScoreBoardObject={setScoreBoardObject}/>
    </div>
  );
}
