import "../styles/main-style-sheet.css";

export default function ScoreBoard({currentScore,bestScore})
{
return (
    <div>
    <h1>Current Score: {currentScore} | Best Score: {bestScore}</h1>
    
    </div>
)
}