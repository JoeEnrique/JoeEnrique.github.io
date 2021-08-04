import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 121 * brickIndex,
          y: 50 + 57 * rowIndex,
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

export const level1 = [
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
];

export const level2 = [
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
];

//const all_levels = [[1, 0, 1, 0, 1, 0, 1],[1, 1, 1, 1, 1, 1, 1],[1, 1, 1, 0, 1, 1, 1]],[[1, 0, 1, 0, 1, 0, 1],[1, 1, 1, 1, 1, 1, 1],[1, 1, 1, 0, 1, 1, 1]];
