import { useEffect, useState } from "react"
import GameDetails from "../components/GameDetails"
import GameForm from "../components/GameForm"

const Home = () => {
  const [games, setGames] = useState(null)

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:3000/api/games")
      const data = await response.json()

      if (response.ok) {
        setGames(data)
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
