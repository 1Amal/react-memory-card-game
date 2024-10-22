import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import ScoreBoard from './ScoreBoard.jsx'
import Introduction from './Introduction.jsx';

import "../styles/main-style-sheet.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreBoard/>
    <Introduction/>
    {/* <App /> */}
  </StrictMode>,
)


// Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.

// No of Memory Cards: 5, use Giphy API to download the following images
// CSS: https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmcwZHU0YWR0eWM0anIwenp3ZTRpc2FwZHBrYnlhZzJ5dTFqbjhzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif
//Android:
//JavaScript:
//HTML:
//React:

// Component: Main, App, 
// Score Component: Current Score, Best Score