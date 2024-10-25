import "../styles/main-style-sheet.css";

export default function Introduction ()
{
    return (
        <div className="introductionContainer">
            <h1>Welcome To Memory Card Game</h1>
            <p>This React-based interactive memory card game allows players to match pairs of cards displaying images and text from an external API. The game tracks the current score and the highest score achieved, with cards shuffling randomly each time one is clicked for a fresh experience.</p>
            <h3>Instructions: Get points by clicking on an image but don't click on any more than once! </h3>
            <h3> <a href="https://amal-memory-card-game.netlify.app/">Live Preview On : Netlify</a></h3>
            
            <h3> <a href="https://github.com/1Amal/react-memory-card-game">Source Code on: Github</a></h3>


        </div>
        
    )
}