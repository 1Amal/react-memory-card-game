import { useState, useEffect } from "react";

import ScoreBoard from "./ScoreBoard.jsx";
import Introduction from "./Introduction.jsx";
import CardsContainer from "./CardsContainer.jsx";

export default function GameLogic() {
  // const [requiredImageId, setRequiredImageId] = useState("fsEaZldNC8A1PJ3mwp");
  const [fetchedImage, setFetchedImage] = useState("");

  const [scoreBoardObject, setScoreBoardObject] = useState({
    currentScore: 0,
    bestScore: 0,
  });
  // let returnedImageURL;

  const [giphyImageIDObject, setGiphyImageIDObject] = useState([
    {
      giphyImageId: "ln7z2eWriiQAllfVcn",
      imageName: "JavaScript",
      backupURL:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWw1NTB0aHJlMGZmcmRzNmQyN2NjZWh1MHN4aWVkcHk5OWphMmsxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ln7z2eWriiQAllfVcn/giphy.webp",
      giphyFetchedURL: "",
    },
    {
      giphyImageId: "XAxylRMCdpbEWUAvr8",
      imageName: "HTML",
      backupURL:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxbm9kNDduNmN3NHI3eTQxdGJ2M3NqNjNhOGFtOThpOG15eHNkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XAxylRMCdpbEWUAvr8/giphy.webp",
      giphyFetchedURL: "",
    },
    {
      giphyImageId: "fsEaZldNC8A1PJ3mwp",
      imageName: "CSS",
      backupURL:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXQzYnR6bGx0MG9lYXMxMmw3d3k1amJnZHFtMWlkdzR0eDczcjg5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fsEaZldNC8A1PJ3mwp/giphy.webp",
      giphyFetchedURL: "",
    },
    {
      giphyImageId: "eNAsjO55tPbgaor7ma",
      imageName: "React",
      backupURL:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjl3ZmVhN2dra3Rwb3U0ZHV4d2ozOTdldG10aHRsNGVlZDVpbmRpeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.webp",
      giphyFetchedURL: "",
    },
    {
      giphyImageId: "kH1DBkPNyZPOk0BxrM",
      imageName: "Git",
      backupURL:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzJuZjV1Y3lxcTgzNjY3ZnBudjdmaTE1ZmlyMTZ1MWR3cnB6cjA2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kH1DBkPNyZPOk0BxrM/giphy.webp",
      giphyFetchedURL: "",
    },
  ]);

  // Following function has been disabled as decided to move on with static URL's from Giphy
  // useEffect(() => {
  //   let imageID = requiredImageId;

  //   fetch(
  //     `https://api.giphy.com/v1/gifs/${imageID}?api_key=il0jSOJwebRzCIT6pUUgIfQBOZjvpotK&rating=g`,
  //     {
  //       mode: "cors",
  //     }
  //   )
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (response) {
  //       returnedImageURL = response.data.images.downsized_medium.url;
  //       setFetchedImage(returnedImageURL);

  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });

  // }, [requiredImageId]);

  return (
    <div>
      <Introduction />
      <ScoreBoard scoreBoardObject={scoreBoardObject} />
      <CardsContainer
        giphyImageIDObject={giphyImageIDObject}
        fetchedImage={fetchedImage}
        scoreBoardObject={scoreBoardObject}
        setScoreBoardObject={setScoreBoardObject}
      />
    </div>
  );
}
