import { useEffect } from "react";
import { useGamesContext } from "../../hooks/useGamesContext";

import styles from "./recently-added.module.css";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
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
    <section id="recently-added" className={styles.wrapper}>
      <h3>Recently Added</h3>
      <ul className="cards">
        {games &&
          games
            .sort((a, b) => {
              if (a.createdAt > b.createdAt) {
                return -1;
              }
              if (a.createdAt < b.createdAt) {
                return 1;
              }
            })
            .slice(0, 3)
            .map((game) => {
              return (
                <li key={game._id}>
                  <Link to={`/games/${game._id}`} state={game}>
                    <div className="card">
                      <div className="card-image">
                        <img src={game.image} alt={game.title} />
                      </div>
                      <div className="card-footer">{game.title}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
      </ul>
    </section>
  );
};

export default RecentlyAdded;
