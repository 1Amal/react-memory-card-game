export default function GameLogic() {
    async function FetchImage(imageRequired) {
    // alert(imageRequired);
    // ("https://api.giphy.com/v1/gifs/translate?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&s=Andorid");

    // URL (required), options (optional)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&s=Andorid',{
    mode:'cors'
})
.then(function(response) {
return response.json();
// console.log(response.json());

})
.then(function(response){
    console.log(response.data.images.original.url);
    // return(<img src='response.data.images.original.url'/>)
    // return response.data.images.original.url
    return (response.data.images.original.url)
})
.catch(function(err) {
  console.log(err)
});

  }
  return (
    <div>
      <h1>Game Logic Component</h1>

      <button onClick={()=>FetchImage()}>Fetch Image</button>
      {/* <p>{console.log(FetchImage)}</p> */}
      <img src={FetchImage} alt="Fetched Image"/>
    </div>
  );
}
