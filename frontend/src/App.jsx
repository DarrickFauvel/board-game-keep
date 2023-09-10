import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import NewGame from "./pages/NewGame";
import ListGames from "./pages/ListGames";
import GameDetail from "./pages/GameDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewGame />} />
          <Route path="/games">
            <Route index element={<ListGames />} />
            <Route path=":id" element={<GameDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
