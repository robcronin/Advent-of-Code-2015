import { parseLines } from '../utils/input';
import {
  countBrightness,
  generateGrid,
  runLightInstructionInPlaceOnGrid,
  runLightInstructionOnLight,
  runOldLightInstructionOnLight,
} from './grid';

export type Instruction = 'turn on' | 'toggle' | 'turn off';
export interface LightInstruction {
  instruction: Instruction;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const parseLightInstructions = (input: string): LightInstruction[] => {
  const parsed = parseLines(input, '\n');
  return parsed.map((lightInstruction) => {
    const groups = lightInstruction.match(
      new RegExp(
        '^(turn on|toggle|turn off) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)',
      ),
    );
    if (!groups)
      throw new Error(`${lightInstruction} is not a valid light instruction`);
    const [_, instruction, x1, y1, x2, y2] = groups;

    return {
      instruction: instruction as Instruction,
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
    };
  });
};

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
