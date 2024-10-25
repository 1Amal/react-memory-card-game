import Card from "./Card";

export default function CardsContainer({ FetchImageFunction }) {
  return (
    <div className="projectsContainer">
      <div className="projectDiv">
        <Card CardId={1} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv">
        <Card CardId={0} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv">
        <Card CardId={3} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv">
        <Card CardId={4} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv">
        <Card CardId={2} FetchImageFunction={FetchImageFunction} />
      </div>
    </div>
  );
}
