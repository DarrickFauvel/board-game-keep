const GameDetails = ({ game }) => {
  return <p key={game._id}>{game.title}</p>
}

export default GameDetails
