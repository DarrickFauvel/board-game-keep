/* eslint-disable react/prop-types */
const GameDetails = ({ game }) => {
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
      <p>{game.createdAt}</p>
    </div>
  )
}

export default GameDetails
