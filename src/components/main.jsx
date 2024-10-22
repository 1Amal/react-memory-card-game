import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import ScoreBoard from "./ScoreBoard.jsx";
import Introduction from "./Introduction.jsx";
import CardsContainer from "./CardsContainer.jsx";

import "../styles/main-style-sheet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreBoard currentScore={2} bestScore={3} />
    <Introduction />
    <CardsContainer />
    {/* <App /> */}
  </StrictMode>
);

// Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.

// No of Memory Cards: 5, use Giphy API to download the following images
// CSS: https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmcwZHU0YWR0eWM0anIwenp3ZTRpc2FwZHBrYnlhZzJ5dTFqbjhzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif
//Android:
//JavaScript:
//HTML:
//React:

// Logic to shuffle the cards: Random placement of cards
//Logic to count the current score - Set State
//Logic to record the highest score - set State

// Everytime a new card is clicked this card will need to be compared with the previously user recorded cards
// If this card is within the user clicked object or array current score will be reset then


/* 
*** Pseudo code ***

<MainComponent
  <ScoreBoard-Component
  <Introduction-Component/>
  <CardContainer-Component/>

/>

<Introduction-Component
      function Introduction()
      {
        Return Game information text to screen
      }
/>

<CardContainer-Component

    function RandomCardSelection()
      {
        currentIndexNo=0;
        Each time this function is called Step via the following array i.e. index0, index1,..., index5, index0
        [1,2,3,4,5],
        [2,3,4,5,1],
        [3,4,5,1,2],
        [4,5,1,2,3],
        [5,1,2,3,4]

        return currentIndexNo;
      }

    function CardPlacement ()
    {
      CardOrder = RandomCardSelection()


      <GridPosition0-Component card0Prop={CardOrder[0]}/>
      <GridPosition1-Component card1Prop={CardOrder[1]/>
      <GridPosition2-Component card2Prop={CardOrder[2]/>
      <GridPosition3-Component card3Prop={CardOrder[3]/>
      <GridPosition4-Component card4Prop={CardOrder[4]/>

      set userSelection=Null
      set currentScore=0
    }
/>

<GridPosition1-Component
    function GridPosition1({card1Prop})
      {
        GridPosition1Details=fetchImage();

        imageUrl=GridPosition1Details[card1Prop].imageUrl
        imageTitle=GridPosition1Details[card1Prop].ImageTitle

        ImageToDisplay=imageUrl
        ImageTitle=imageTitle

      }

    function fetchImage()
      {
      imageDataObject = [{cardId:"1", imageId:"",imageUrl:"", ImageTitle:""},...]


      return imageDataObject

      }

/>

<ScoreBoard-Component
    function ScoreBoard()
    {
      scoreObject={currentScore:"",highestScore} // At the start of the game initialize an empty object or an array for userSelections choice savings
    

    }

     


/>


*/

