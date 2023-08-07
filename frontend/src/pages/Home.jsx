import { useEffect, useState } from "react"
import GameDetails from "../components/GameDetails"

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
      <h2>Home</h2>
      <div className="games">
        {games && games.map((game) => <GameDetails game={game} />)}
      </div>
    </div>
  )
}

export default Home
