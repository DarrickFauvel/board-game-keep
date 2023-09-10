import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGamesContext } from "../hooks/useGamesContext";

const GameForm = () => {
  const { dispatch } = useGamesContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const game = {
      title,
      description,
      image,
      note,
    };

    const response = await fetch("/api/games", {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setImage("");
      setNote("");
      setError(null);
      setEmptyFields([]);
      console.log("New game added.", json);
      dispatch({ type: "CREATE_GAME", payload: json });
      navigate("/games");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Game</h3>

      <label htmlFor="">Game Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label htmlFor="">Game Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <label htmlFor="">Game Image:</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={emptyFields.includes("image") ? "error" : ""}
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
  );
};

export default GameForm;
