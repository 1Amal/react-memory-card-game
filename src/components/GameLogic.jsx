import { useState } from "react";
export default function GameLogic() {
  const [fetchedImage, setFetchedImage] = useState("");
  //   https://api.giphy.com/v1/gifs/translate?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&s=CSS

  //<iframe src="https://giphy.com/embed/M4NykXxUE0HAcK7UJ6" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/shecodesio-computer-javascript-shecodes-M4NykXxUE0HAcK7UJ6">via GIPHY</a></p>
  async function FetchImage(imageRequired) {
    let imageID = "";
    const imageIDCSS = "fsEaZldNC8A1PJ3mwp";
    const imageIDHTML = "XAxylRMCdpbEWUAvr8";
    const ImageIDJS = "ln7z2eWriiQAllfVcn";
    const ImageIDReact = "eNAsjO55tPbgaor7ma";
    const ImageIDGit = "kH1DBkPNyZPOk0BxrM";

    imageID = ImageIDGit;
    fetch(
      `https://api.giphy.com/v1/gifs/${imageID}?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&rating=g`,
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        console.dir(response.json);
        return response.json();
      })
      .then(function (response) {
        console.log(response.data.images.original.url);
        let returnedImageURL = response.data.images.original.url;
        setFetchedImage(returnedImageURL);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Game Logic Component</h1>

      <button onClick={() => FetchImage()}>Fetch Image</button>
      {/* <p>{console.log(FetchImage)}</p> */}
      <img src={fetchedImage} alt="Fetched Image" />
    </div>
  );
}
