export default function GameLogic() {
  function FetchImage(imageRequired) {
    // alert(imageRequired);
    // ("https://api.giphy.com/v1/gifs/translate?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&s=Andorid");
  }
  return (
    <div>
      <h1>Game Logic Component</h1>

      <button onClick={FetchImage}>Fetch Image</button>
    </div>
  );
}
