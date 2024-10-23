import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import ScoreBoard from "./ScoreBoard.jsx";
import Introduction from "./Introduction.jsx";
import CardsContainer from "./CardsContainer.jsx";
import GameLogic from "./GameLogic.jsx";

import "../styles/main-style-sheet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreBoard currentScore={2} bestScore={3} />
    <Introduction />
    <GameLogic />
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
setStates: When User clicks on a card
useEffect: Used when Giphy API calls are made


<MainComponent
  <ScoreBoard-Component/>
  <Introduction-Component/>
  <CardContainer-Component/>

/>

<GameLogic-Component
      imageDataObject = [{cardId:"1", imageId:"",imageUrl:"", ImageTitle:""},...]

      scoreObject={currentScore:"",highestScore} // At the start of the game initialize an empty object or an array for userSelections choice savings

      userSelectionObject={firstClickID,secondClickID,...}

    function GameLogicMain()
      {
          compare each value in userSelectionObject to value sent by ListenToClicks()
              IF userSelectionObject.values===imageId 
                THEN
          
                  IF scoreObject.currentScore > scoreObject.highestScore
                    THEN scoreObject.highestScore=currentScore
                         scoreObject.currentScore=0
                    ELSE 
                        scoreObject.currentScore=0
                    
              ELSE 
                  scoreObject.currentScore=+1
              
          RETURN <ScoreBoard-Component scoreUpdate={scoreObject}/>

    }

    function fetchImage(imageRequired)
      {
      
      fetchedImage=GIPHY API Call (imageRequired) // Use the GIPHY APi to call up the image from either the image URL or Image ID

      return fetchedImage

      }

    function ListenToClicks()
    {
      LISTEN for User Clicks
        IF clicked on card
         THEN RETURN GameLogicMain(imageID)
        
        ELSE
          DO NOTHING
        
    }
/>

<Introduction-Component
      function Introduction()
      {
        Return Game information text to screen
      }
/>

<CardContainer-Component

  i=0

    function RandomCardSelection()
      {
            randomNumberObject={[1,2,3,4,5],
                                [2,3,4,5,1],
                                [3,4,5,1,2],
                                [4,5,1,2,3],
                                [5,1,2,3,4]}
        COUNTER (From 0 to 4) counterValue=i 
        
        
        return randomNumberObject[i]
   
      }

    function CardPlacement ()
    {
      CardOrder = RandomCardSelection()


      <GridPosition0-Component card0Prop={CardOrder[0]}/>
      <GridPosition1-Component card1Prop={CardOrder[1]/>
      <GridPosition2-Component card2Prop={CardOrder[2]/>
      <GridPosition3-Component card3Prop={CardOrder[3]/>
      <GridPosition4-Component card4Prop={CardOrder[4]/>

    }
/>

<GridPosition0-Component
    function GridPosition0({card0Prop})
      {
        imageUrl=imageDataObject.[card0Prop].imageUrl
        imageTitle=imageDataObject[card0Prop].ImageTitle

        ImageToDisplay=fetchImage(imageUrl)
        ImageTitle=imageTitle

      }


/>

*****Alternative Card Shuffle Algo****
      <CardContainer

        function randomCardSelection()
              {
                     
                  RETURN CardOrder(Number between 0 and 4)
              }




          IF CardOrder=0
            THEN
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>

          ELSE IF CardOrder=1
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
                <Card1/>

          ELSE IF CardOrder=2
                <Card3/>
                <Card4/>
                <Card5/>
                <Card1/>
                <Card2/>

          ELSE IF CardOrder=3
                <Card4/>
                <Card5/>
                <Card1/>
                <Card2/>
                <Card3/>

          ELSE IF CardOrder=4
                <Card5/>      
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
      
      />

      <Card1
          <GridPosition0-Component
              function GridPosition0({card0Prop})
                {
                  imageUrl=imageDataObject.[card0Prop].imageUrl
                  imageTitle=imageDataObject[card0Prop].ImageTitle

                  ImageToDisplay=fetchImage(imageUrl)
                  ImageTitle=imageTitle

                }


      />



<ScoreBoard-Component
    function ScoreBoard({scoreUpdate})
    {

    return {scoreUpdate.highestScore} {scoreUpdate.currentScore}

    }

     
/>


*/
