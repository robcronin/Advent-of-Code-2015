type Grid = Record<number, Record<number, number>>;
interface HousesConfig {
  housesHit: number;
  grid: Grid;
}

const checkAndMarkHouse = (
  x: number,
  y: number,
  housesConfig: HousesConfig,
): HousesConfig => {
  const { grid, housesHit } = housesConfig;
  if (!grid[x] || !grid[x][y]) {
    return {
      housesHit: housesHit + 1,
      grid: { ...grid, [x]: { ...grid[x], [y]: 1 } },
    };
  }
  return {
    ...housesConfig,
  };
};

const move = (x: number, y: number, direction: string): [number, number] => {
  if (direction === '>') return [x + 1, y];
  if (direction === '^') return [x, y + 1];
  if (direction === 'v') return [x, y - 1];
  if (direction === '<') return [x - 1, y];
  throw new Error(`Invalid direction : ${direction}`);
};

const generateHousesConfig = (): HousesConfig => ({
  housesHit: 1,
  grid: { 0: { 0: 1 } },
});

export const day3 = (input: string) => {
  let housesConfig = generateHousesConfig();
  let [x, y] = [0, 0];

  [...input].forEach((direction) => {
    [x, y] = move(x, y, direction);
    housesConfig = checkAndMarkHouse(x, y, housesConfig);
  });
  return housesConfig.housesHit;
};

export const day3part2 = (input: string) => {
  let housesConfig = generateHousesConfig();
  let [x, y, robotX, robotY] = [0, 0, 0, 0];
  let robotTurn = false;

  [...input].forEach((direction) => {
    if (!robotTurn) {
      [x, y] = move(x, y, direction);
      housesConfig = checkAndMarkHouse(x, y, housesConfig);
    } else {
      [robotX, robotY] = move(robotX, robotY, direction);
      housesConfig = checkAndMarkHouse(robotX, robotY, housesConfig);
    }
    robotTurn = !robotTurn;
  });
  return housesConfig.housesHit;
};
