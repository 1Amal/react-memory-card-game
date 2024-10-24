import {useState} from "react";
export default function Card() {

  const [fetchedImage, setFetchedImage] = useState("")

  function testImage() {
    const fetchedImageSimulation =
      "https://media1.giphy.com/media/rIq6ASPIqo2k0/giphy.gif?cid=cfdad64aqw073qig3wpx2dr0xin5g47sxnua9eg9uwupolsl&ep=v1_gifs_translate&rid=giphy.gif&ct=g";

      setFetchedImage(fetchedImageSimulation);
        console.log(fetchedImage);

    
    // return fetchedImage;
  }
  return (
    <div className="projectCardsContainer">
      <div className="projectDiv">
        <h1>Card 1</h1>
        {/* <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmcwZHU0YWR0eWM0anIwenp3ZTRpc2FwZHBrYnlhZzJ5dTFqbjhzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif"
          alt="CSS"
        /> */}
        
        <button onClick={testImage}>Fetch Image</button>
        <img src={fetchedImage} alt="Test Image"/>
        

      </div>

      {/* <div className="projectDiv">
                <h1>Card 2</h1>
            </div>
             */}
    </div>
  );
}
