import { useEffect } from "react";
import GameDetails from "../components/GameDetails";
import { useGamesContext } from "../hooks/useGamesContext";
import BackNav from "../components/BackNav";

const ListGames = () => {
  const { games, dispatch } = useGamesContext();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:3000/api/games");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_GAMES",
          payload: json,
        });
      }
    };

    fetchGames();
  }, [dispatch]);

  return (
    <div className="home">
      <BackNav />
      <div className="games">
        {games &&
          games.map((game) => <GameDetails game={game} key={game._id} />)}
      </div>
    </div>
  );
};

export default ListGames;
