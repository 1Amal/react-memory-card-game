import Card from "./Card";

export default function CardsContainer({ imageTestData }) {
  return (
    <div className="projectCardsContainer">
      <h1>Select Cards Below</h1>

      <div className="projectDiv">
        <Card imageTestData={imageTestData} />
        <h1>Container 1</h1>
      </div>
      {/* <div className="projectDiv">
        <h1>Container 2</h1>
  
      </div> */}
    </div>
  );
}
