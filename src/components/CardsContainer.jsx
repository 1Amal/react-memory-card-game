import Card from "./Card";
import { useState } from "react";

export default function CardsContainer({ FetchImageFunction }) {
  const [CardIDRandomObject, setCardIDRandomObject] = useState({
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
  });

  let randomNumber = Math.floor(Math.random()*(6-1)+1);
  console.log(randomNumber)

  
  function randomCardSelection() {


    if (randomNumber == 1) {
      setCardIDRandomObject({
        ...CardIDRandomObject,
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
      });
    }

    else if (randomNumber == 2) {
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
        D: 1,
        E: 2,
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

    console.log(CardIDRandomObject);
  }
  return (
    <div className="projectsContainer">
      <button onClick={() => randomCardSelection()}>Change Cards</button>
      <h1>{randomNumber}</h1>
      <div className="projectDiv Card1">
        <Card
          CardId={CardIDRandomObject["A"]}
          FetchImageFunction={FetchImageFunction}
        />
      </div>

      <div className="projectDiv Card2">
        <Card
          CardId={CardIDRandomObject["B"]}
          FetchImageFunction={FetchImageFunction}
        />
      </div>

      <div className="projectDiv Card3">
        <Card
          CardId={CardIDRandomObject["C"]}
          FetchImageFunction={FetchImageFunction}
        />
      </div>

      <div className="projectDiv Card4">
        <Card
          CardId={CardIDRandomObject["D"]}
          FetchImageFunction={FetchImageFunction}
        />
      </div>

      <div className="projectDiv Card5">
        <Card
          CardId={CardIDRandomObject["E"]}
          FetchImageFunction={FetchImageFunction}
        />
      </div>
    </div>
  );
}
