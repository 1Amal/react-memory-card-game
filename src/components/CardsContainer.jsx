import Card from "./Card";

export default function CardsContainer({ FetchImageFunction }) {
  return (
    <div className="projectsContainer">
      <div className="projectDiv Card1">
        <Card CardId={1} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv Card2">
        <Card CardId={0} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv Card3">
        <Card CardId={3} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv Card4">
        <Card CardId={4} FetchImageFunction={FetchImageFunction} />
      </div>

      <div className="projectDiv Card5">
        <Card CardId={2} FetchImageFunction={FetchImageFunction} />
      </div>
    </div>
  );
}
