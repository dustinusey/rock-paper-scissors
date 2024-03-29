import { useState } from "react";
import Game from "./Components/Screens/Game";
import Home from "./Components/Screens/Home";

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [hasDraw, setHasDraw] = useState(false);

  return (
    <div
      className={`app ${startGame ? "game-bg" : ""} ${hasWon ? "win" : ""} ${
        hasLost ? "lose" : ""
      } ${hasDraw ? "draw" : ""}`}
    >
      {!startGame ? (
        <Home setStartGame={setStartGame} />
      ) : (
        <Game
          hasWon={hasWon}
          setHasWon={setHasWon}
          hasLost={hasLost}
          setHasLost={setHasLost}
          hasDraw={hasDraw}
          setHasDraw={setHasDraw}
        />
      )}
    </div>
  );
};
export default App;
