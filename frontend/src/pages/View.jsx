import GameDetails from "../components/GameDetails";
import RecentlyAdded from "../components/RecentlyAdded";

const View = () => {
  return (
    <div className="home">
      <RecentlyAdded />

      <GameDetails game={game} />
    </div>
  );
};

export default View;
