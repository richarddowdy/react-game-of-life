import { useState, useRef, useCallback } from "react";
import { produce } from "immer";

import { calculateNumberOfLivingNeighbors } from "./util/scripts";

// Styles
import "./Grid.css";
// Components
import Node from "./Node";

const Grid = ({ numRows, numCols }) => {
  const [showGrid, setShowGrid] = useState(true);

  const [mouseDown, setMouseDown] = useState(false);
  const mouseDownRef = useRef();
  mouseDownRef.current = mouseDown;

  const [grid, setGrid] = useState(
    new Array(numRows).fill(new Array(numCols).fill(0))
  );

  const [running, setRunning] = useState(false);
  const isRunningRef = useRef();
  isRunningRef.current = running;

  const handleClick = (x, y) => {
    if (!mouseDownRef.current) return;
    let newGrid = produce(grid, (gridCopy) => {
      gridCopy[x][y] === 0 ? (gridCopy[x][y] = 1) : (gridCopy[x][y] = 0);
    });
    setGrid(newGrid);
  };

  const startGameOfLife = useCallback(() => {
    if (!isRunningRef.current) return;

    setGrid((oldGrid) => {
      return produce(oldGrid, (newGrid) => {
        for (let row = 0; row < oldGrid.length; row++) {
          for (let col = 0; col < oldGrid[row].length; col++) {
            const cellIsAlive = oldGrid[row][col] === 1 ? true : false;
            const numberOfLivingNeighbors = calculateNumberOfLivingNeighbors(
              [row, col],
              oldGrid
            );

            if (
              cellIsAlive &&
              (numberOfLivingNeighbors < 2 || numberOfLivingNeighbors > 3)
            ) {
              newGrid[row][col] = 0; // Cell dies
            } else if (!cellIsAlive && numberOfLivingNeighbors === 3) {
              newGrid[row][col] = 1; // Cell becomes alive
            }
          }
        }
      });
    });

    setTimeout(startGameOfLife, 10);
  }, []);

  return (
    <>
      <div
        id="grid"
        style={{
          content: "center",
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, rowIdx) =>
          rows.map((col, colIdx) => {
            return (
              <Node
                key={`${rowIdx}-${colIdx}`}
                val={col}
                coords={[rowIdx, colIdx]}
                handleClick={handleClick}
                showGrid={showGrid}
                mouseDownRef={mouseDownRef}
                setMouseDown={setMouseDown}
              />
            );
          })
        )}
      </div>
      <div id="grid_controls">
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              isRunningRef.current = true;
              startGameOfLife();
            }
          }}
        >
          {running ? "Stop" : "Go Live!"}
        </button>
        <button onClick={() => setShowGrid(!showGrid)}>
          {showGrid ? "Hide Grid" : "Show Grid"}
        </button>
      </div>
    </>
  );
};

export default Grid;
