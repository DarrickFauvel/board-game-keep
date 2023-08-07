import { useState } from "react"

const GameForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [note, setNote] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const game = {
      title,
      description,
      image,
      note,
    }

    const response = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setTitle("")
      setDescription("")
      setImage("")
      setNote("")
      setError(null)
      console.log("New game added.", json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Game</h3>

      <label htmlFor="">Game Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="">Game Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label htmlFor="">Game Image:</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <label htmlFor="">Game Note:</label>
      <input
        type="text"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />

      <button type="submit">Add Game</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default GameForm
