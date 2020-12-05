import { Instruction, LightInstruction } from './input';

type Grid = Record<number, Record<number, number>>;

export const generateGrid = (
  width: number = 1000,
  height: number = 1000,
): Grid => {
  const grid: Grid = {};
  for (let x = 0; x < width; x++) {
    grid[x] = {};
    for (let y = 0; y < height; y++) {
      grid[x][y] = 0;
    }
  }
  return grid;
};

export const countBrightness = (grid: Grid): number => {
  let litLights = 0;
  Object.values(grid).forEach((row) => {
    Object.values(row).forEach((lightBrightness) => {
      litLights += lightBrightness;
    });
  });
  return litLights;
};

export const runOldLightInstructionOnLight = (
  currentState: number,
  instruction: Instruction,
): number => {
  if (instruction === 'turn on') return 1;
  else if (instruction === 'turn off') return 0;
  else return currentState === 0 ? 1 : 0;
};

export const runLightInstructionOnLight = (
  currentState: number,
  instruction: Instruction,
): number => {
  if (instruction === 'turn on') return currentState + 1;
  else if (instruction === 'turn off')
    return currentState === 0 ? 0 : currentState - 1;
  else return currentState + 2;
};

export const runLightInstructionInPlaceOnGrid = (
  lightInstruction: LightInstruction,
  grid: Grid,
  applyRule: (currentState: number, instruction: Instruction) => number,
): void => {
  const { instruction, x1, y1, x2, y2 } = lightInstruction;
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      grid[x][y] = applyRule(grid[x][y], instruction);
    }
  }
};
