import { useState } from "react";
import { maps } from "./utils/maps";
import { Game } from "./Game";

const App = () => {
  const [currentMap, setCurrentMap] = useState(maps.map1);
  const [playerCol, setPlayerCol] = useState(maps.map1.playerPosition[0]);
  const [playerRow, setPlayerRow] = useState(maps.map1.playerPosition[1]);

  const directionKey = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
  };

  const handler = ({ key }) => {
    console.log(key);
    setPlayerCol(playerCol + directionKey[key][0]);
    setPlayerRow(playerRow + directionKey[key][1]);
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => handler(e)}>
      <header>
        <h1>Sokoban</h1>
      </header>
      <Game
        map={currentMap}
        setCurrentMap={setCurrentMap}
        col={playerCol}
        row={playerRow}
      />
      <footer>
        <p>Created by Andy B</p>
      </footer>
    </div>
  );
};

export default App;
