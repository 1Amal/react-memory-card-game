import Card from "./Card";

export default function CardsContainer({ FetchImageFunction }) {
  const imageURL = [
    {
      image1:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWw1NTB0aHJlMGZmcmRzNmQyN2NjZWh1MHN4aWVkcHk5OWphMmsxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ln7z2eWriiQAllfVcn/giphy.webp",
    },
    {
      image2:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxbm9kNDduNmN3NHI3eTQxdGJ2M3NqNjNhOGFtOThpOG15eHNkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XAxylRMCdpbEWUAvr8/giphy.webp",
    },
  ];

  return (
    <div className="projectCardsContainer">
      <h1>Select Cards Below</h1>

      <Card
        FetchImageFunction={FetchImageFunction}
        cardName="JavaScript"
        URL={imageURL[0].image1}
      />

      <Card
        FetchImageFunction={FetchImageFunction}
        cardName="HTML"
        URL={imageURL[1].image2}
      />
      <Card FetchImageFunction={FetchImageFunction} cardName="CSS" />
      <Card FetchImageFunction={FetchImageFunction} cardName="React" />
      <Card FetchImageFunction={FetchImageFunction} cardName="Git" />

      {/* <div className="projectDiv">
      <h1>Container 1</h1>
        <Card FetchImageFunction={FetchImageFunction} />
        <Card FetchImageFunction={FetchImageFunction} cardName="JavaScript"/>
        
        
      </div> */}

      {/* <div className="projectDiv">
      <h1>Container 2</h1>

      <Card FetchImageFunction={FetchImageFunction} cardName="HTML"/>


  
      </div> */}
    </div>
  );
}
