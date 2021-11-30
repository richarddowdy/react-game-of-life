import { useState } from "react";
// Components
import Grid from "./Grid";
import Title from "./Title";

// Styles
import "./App.css";

function App() {
  // const [grid, setGrid] = useState();

  return (
    <div className="App">
      <Title />
      <div className="game_of_life">
        <Grid numRows={25} numCols={50} />
      </div>
    </div>
  );
}

export default App;
