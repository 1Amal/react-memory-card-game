import Card from "./Card";
export default function CardsContainer() {
  return (
    <div className="projectCardsContainer">
      <h1>Select Cards Below</h1>

      <div className="projectDiv">
        <Card />
        <h1>Container 1</h1>
      </div>
      <div className="projectDiv">
        <h1>Container 2</h1>
        {/* <Card/>
         */}
      </div>
    </div>
  );
}
