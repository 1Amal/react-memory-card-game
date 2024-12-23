import Card from "./Card";
import { useState } from "react";

export default function CardsContainer({
  giphyImageIDObject,
  fetchedImage,
  setScoreBoardObject,
  scoreBoardObject,
}) {
  const [CardIDRandomObject, setCardIDRandomObject] = useState({
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
  });

  const [userSelectionArray, setUserSelectionArray] = useState([]);

  let currentScore = scoreBoardObject.currentScore;
  let bestScore = scoreBoardObject.bestScore;

  function cardClickedEvent(cardName) {
    let checkForRepeatSelection = userSelectionArray.includes(cardName);
    if (checkForRepeatSelection) {
      console.log("Warning Duplicate Entry found !");
      console.log(scoreBoardObject);

      if (currentScore >= bestScore) {
        bestScore = currentScore;
        currentScore = 0;

        setScoreBoardObject({
          ...scoreBoardObject,
          bestScore: bestScore,
          currentScore: currentScore,
        });
      }
      setUserSelectionArray(
        ...userSelectionArray,
        (userSelectionArray.length = 0)
      );
    } else if (!checkForRepeatSelection) {
      console.log("No Duplicates Found!");

      if (currentScore < 6) {
        currentScore++;
        setScoreBoardObject({
          ...scoreBoardObject,
          currentScore: currentScore,
        });
      } else {
        currentScore = 0;
      }
    }
    userSelectionArray.push(cardName);
    setUserSelectionArray(userSelectionArray);
    console.log(userSelectionArray);

    randomCardSelection();
  }

  function randomCardSelection() {
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if (randomNumber == 1) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
      });
    } else if (randomNumber == 2) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 0,
      });
    } else if (randomNumber == 3) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 2,
        B: 3,
        C: 4,
        D: 0,
        E: 1,
      });
    } else if (randomNumber == 4) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 3,
        B: 4,
        C: 0,
        D: 1,
        E: 2,
      });
    } else if (randomNumber == 5) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 4,
        B: 0,
        C: 1,
        D: 2,
        E: 3,
      });
    }
  }
  return (
    <div className="projectsContainer">
      <div
        className="projectDiv"
        id="Card1"
        onClick={() => cardClickedEvent(CardIDRandomObject["A"])}
      >
        <Card
          giphyImageIDObject={giphyImageIDObject}
          CardId={CardIDRandomObject["A"]}
          fetchedImage={fetchedImage}
        />
      </div>

      <div
        className="projectDiv"
        id="Card2"
        onClick={() => cardClickedEvent(CardIDRandomObject["B"])}
      >
        <Card
          giphyImageIDObject={giphyImageIDObject}
          CardId={CardIDRandomObject["B"]}
          fetchedImage={fetchedImage}
        />
      </div>

      <div
        className="projectDiv"
        id="Card3"
        onClick={() => cardClickedEvent(CardIDRandomObject["C"])}
      >
        <Card
          giphyImageIDObject={giphyImageIDObject}
          CardId={CardIDRandomObject["C"]}
          fetchedImage={fetchedImage}
        />
      </div>

      <div
        className="projectDiv"
        id="Card4"
        onClick={() => cardClickedEvent(CardIDRandomObject["D"])}
      >
        <Card
          giphyImageIDObject={giphyImageIDObject}
          CardId={CardIDRandomObject["D"]}
          fetchedImage={fetchedImage}
        />
      </div>

      <div
        className="projectDiv"
        id="Card5"
        onClick={() => cardClickedEvent(CardIDRandomObject["E"])}
      >
        <Card
          giphyImageIDObject={giphyImageIDObject}
          CardId={CardIDRandomObject["E"]}
          fetchedImage={fetchedImage}
        />
      </div>
    </div>
  );
}
