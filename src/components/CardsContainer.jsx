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
    <div className="projectsContainer">
      <div className="projectDiv">
        <Card
          FetchImageFunction={FetchImageFunction}
          cardName="JavaScript"
          URL={imageURL[0].image1}
        />
      </div>

      <div className="projectDiv">
        <Card
          FetchImageFunction={FetchImageFunction}
          cardName="HTML"
          URL={imageURL[1].image2}
        />
      </div>

      <div className="projectDiv">
        <Card FetchImageFunction={FetchImageFunction} cardName="CSS" />
      </div>

      <div className="projectDiv">
        <Card FetchImageFunction={FetchImageFunction} cardName="React" />
      </div>

      <div className="projectDiv">
        <Card FetchImageFunction={FetchImageFunction} cardName="Git" />
      </div>
    </div>
  );
}
