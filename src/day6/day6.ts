import {
  countBrightness,
  generateGrid,
  runLightInstructionInPlaceOnGrid,
  runLightInstructionOnLight,
  runOldLightInstructionOnLight,
} from '../utils/grid';
import { Instruction, LightInstruction } from '../utils/input';

const runInstructionsAndReturnTotalBrightness = (
  input: LightInstruction[],
  applyRule: (currentState: number, instruction: Instruction) => number,
) => {
  const grid = generateGrid();
  input.forEach((lightInstruction) =>
    runLightInstructionInPlaceOnGrid(lightInstruction, grid, applyRule),
  );
  return countBrightness(grid);
};

export const day6 = (input: LightInstruction[]) =>
  runInstructionsAndReturnTotalBrightness(input, runOldLightInstructionOnLight);

export const day6part2 = (input: LightInstruction[]) =>
  runInstructionsAndReturnTotalBrightness(input, runLightInstructionOnLight);
