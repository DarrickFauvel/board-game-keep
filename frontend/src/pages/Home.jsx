import { useEffect } from "react"
import GameDetails from "../components/GameDetails"
import GameForm from "../components/GameForm"
import { useGamesContext } from "../hooks/useGamesContext"

const Home = () => {
  const { games, dispatch } = useGamesContext()

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:3000/api/games")
      const json = await response.json()

      if (response.ok) {
        dispatch({
          type: "SET_GAMES",
          payload: json,
        })
      }
    }

    fetchGames()
  }, [])

  return (
    <div className="home">
      <div className="games">
        {games &&
          games.map((game) => <GameDetails game={game} key={game._id} />)}
      </div>
      <GameForm />
    </div>
  )
}

export default Home
