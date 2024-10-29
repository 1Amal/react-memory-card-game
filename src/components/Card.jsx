import { useState } from "react";
export default function Card({ FetchImageFunction, CardId, fetchedImage, giphyImageIDObject }) {
  


  

  return (
    <div>
      
      {/* <button onClick={()=>{getGiphyImageURL()}}>Call Giphy Image</button> */}
      <img
        id={giphyImageIDObject[CardId]["giphyImageId"]}
        src={giphyImageIDObject[CardId]["backupURL"]}
        // src={giphyImageIDObject[CardId]["giphyFetchedURL"]}
        alt={giphyImageIDObject[CardId]["imageName"]}
        className="imageSize"
      />

      <h2>{giphyImageIDObject[CardId]["imageName"]}</h2>
      {/* {console.dir(CardId)} */}
    </div>
  );
}
