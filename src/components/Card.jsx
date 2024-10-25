import { useState } from "react";
export default function Card({ FetchImageFunction, CardId }) {
  const [fetchedImage, setFetchedImage] = useState("");

  const giphyImageIDObject = [
    {
      imageId: "ln7z2eWriiQAllfVcn",
      imageName: "JavaScript",
      URL: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWw1NTB0aHJlMGZmcmRzNmQyN2NjZWh1MHN4aWVkcHk5OWphMmsxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ln7z2eWriiQAllfVcn/giphy.webp",
    },
    {
      imageId: "XAxylRMCdpbEWUAvr8",
      imageName: "HTML",
      URL: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxbm9kNDduNmN3NHI3eTQxdGJ2M3NqNjNhOGFtOThpOG15eHNkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XAxylRMCdpbEWUAvr8/giphy.webp",
    },
    {
      imageId: "fsEaZldNC8A1PJ3mwp",
      imageName: "CSS",
      URL: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXQzYnR6bGx0MG9lYXMxMmw3d3k1amJnZHFtMWlkdzR0eDczcjg5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fsEaZldNC8A1PJ3mwp/giphy.webp",
    },
    {
      imageId: "eNAsjO55tPbgaor7ma",
      imageName: "React",
      URL: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjl3ZmVhN2dra3Rwb3U0ZHV4d2ozOTdldG10aHRsNGVlZDVpbmRpeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.webp",
    },
    {
      imageId: "kH1DBkPNyZPOk0BxrM",
      imageName: "Git",
      URL: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzJuZjV1Y3lxcTgzNjY3ZnBudjdmaTE1ZmlyMTZ1MWR3cnB6cjA2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kH1DBkPNyZPOk0BxrM/giphy.webp",
    },
  ];

  //   const imageUrl = () => FetchImageFunction("fsEaZldNC8A1PJ3mwp");
  //   ;

  return (
    <div>
      <img
        src={giphyImageIDObject[CardId]["URL"]}
        alt={giphyImageIDObject[CardId]["imageName"]}
        className="imageSize"
      />

      <h2>{giphyImageIDObject[CardId]["imageName"]}</h2>
      {console.dir(CardId)}
    </div>
  );
}
