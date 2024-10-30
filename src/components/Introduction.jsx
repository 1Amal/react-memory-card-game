import "../styles/main-style-sheet.css";

export default function Introduction() {
  return (
    <div className="introductionContainer">
      <h2>Memory Game</h2>
      <h3>
        This React (JavaScript, CSS, HTML, Vite, Flexbox, Netlify) based
        interactive memory game allows players to select cards displaying images
        from Giphy. The game tracks the current score and the highest score
        achieved, with cards shuffling randomly with each click.
      </h3>
      <h3>
        Instructions: Get points by clicking on an image but don't click on any
        image more than once!{" "}
      </h3>
      <h3>
        {" "}
        <a href="https://amal-memory-card-game.netlify.app/">
          Live Preview On : Netlify
        </a>
      </h3>

      <h3>
        {" "}
        <a href="https://github.com/1Amal/react-memory-card-game">
          Source Code on: Github
        </a>
      </h3>
    </div>
  );
}
