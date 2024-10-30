import { useState } from "react";
export default function Card({ CardId, fetchedImage, giphyImageIDObject }) {
  return (
    <div>
      <img
        id={giphyImageIDObject[CardId]["giphyImageId"]}
        src={giphyImageIDObject[CardId]["backupURL"]}
        // src={giphyImageIDObject[CardId]["giphyFetchedURL"]}
        alt={giphyImageIDObject[CardId]["imageName"]}
        className="imageSize"
      />

      <h2>{giphyImageIDObject[CardId]["imageName"]}</h2>
    </div>
  );
}
