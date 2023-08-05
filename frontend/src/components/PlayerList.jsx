import playerData from "../data/playerData.json"

const PlayerList = () => {
  return (
    <ul>
      {playerData.map((player) => (
        <li key={player.id}>
          {player.firstname} {player.lastname}
        </li>
      ))}
    </ul>
  )
}
export default PlayerList
