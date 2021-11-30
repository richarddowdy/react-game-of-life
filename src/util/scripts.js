const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const validCoordinate = (x, y, numRows, numCols, neighbor) => {
  return (
    x + neighbor[0] >= 0 &&
    x + neighbor[0] < numRows &&
    y + neighbor[1] >= 0 &&
    y + neighbor[1] < numCols
  );
};

export const calculateNumberOfLivingNeighbors = (cellCoordinates, grid) => {
  const [x, y] = cellCoordinates;
  let totalNeighbors = 0;
  for (let neighbor of neighbors) {
    if (
      validCoordinate(x, y, grid.length, grid[x].length, neighbor) &&
      grid[x + neighbor[0]][y + neighbor[1]] === 1
    ) {
      totalNeighbors++;
    }
  }
  return totalNeighbors;
};
