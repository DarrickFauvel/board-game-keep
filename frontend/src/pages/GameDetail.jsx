import { useParams, useLocation, useNavigate } from "react-router-dom";

import { useGamesContext } from "../hooks/useGamesContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

/* eslint-disable react/prop-types */
const GameDetails = () => {
  const location = useLocation();
  const game = location.state;
  const { id } = useParams();
  const { dispatch } = useGamesContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await fetch("/api/games/" + id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      setTimeout(() => {
        dispatch({ type: "DELETE_GAME", payload: json });
        navigate("/games");
      }, 1000);
    }
  };

  return (
    <div className="game-details">
      <h4>{game.title}</h4>
      <img src={game.image} alt={game.title} />
      <p>
        <strong>Description: </strong>
        {game.description}
      </p>
      <p>
        <strong>Note: </strong>
        {game.note}
      </p>
      <p>
        {formatDistanceToNow(new Date(game.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default GameDetails;
