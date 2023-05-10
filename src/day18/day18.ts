import { countArr } from '../utils/array';
import { Coords, Grid, createGridFromInput } from '../utils/grid';
import { range } from '../utils/looping';

enum GridValue {
  ON = '#',
  OFF = '.',
}

const runLoop = (grid: Grid<string>, stuckOn: Coords[]): Grid<string> => {
  const copy = grid.createDeepCopy();
  copy.runSettingFn(({ coords, value }) => {
    if (stuckOn.find(({ x, y }) => x === coords.x && y === coords.y))
      return GridValue.ON;

    const neighbours = grid.getNeighbours(coords, true);
    const numOn = countArr(
      neighbours.map((nc) => grid.get(nc)),
      (value) => value === GridValue.ON,
    );
    const isOn = value === GridValue.ON;
    if (isOn) {
      if ([2, 3].includes(numOn)) return GridValue.ON;
      else return GridValue.OFF;
    } else {
      if (numOn === 3) return GridValue.ON;
      else return GridValue.OFF;
    }
  });
  return copy;
};

const runNumLoops = (
  grid: Grid<string>,
  numLoops: number,
  stuckOn: Coords[],
): Grid<string> => {
  let tempGrid = grid.createDeepCopy();
  range(numLoops).forEach(() => (tempGrid = runLoop(tempGrid, stuckOn)));
  return tempGrid;
};

export const day18 = (input: string[], numLoops: number) => {
  const grid = createGridFromInput(input);
  const postLoopsGrid = runNumLoops(grid, numLoops, []);
  return postLoopsGrid.countValueInGrid(GridValue.ON);
};

export const day18part2 = (input: string[], numLoops: number) => {
  const grid = createGridFromInput(input);
  const stuckOn = [
    { x: 0, y: 0 },
    { x: 0, y: input[0].length - 1 },
    { x: input.length - 1, y: 0 },
    { x: input.length - 1, y: input[0].length - 1 },
  ];
  stuckOn.forEach((coords) => grid.set(coords, GridValue.ON));
  const postLoopsGrid = runNumLoops(grid, numLoops, stuckOn);
  return postLoopsGrid.countValueInGrid(GridValue.ON);
};
