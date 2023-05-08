import {
  countBrightness,
  generateGrid,
  runLightInstructionInPlaceOnGrid,
  runLightInstructionOnLight,
  runOldLightInstructionOnLight,
} from './grid';

test('countBrightness', () => {
  const grid = generateGrid(12, 10);
  grid[2][2] = 12;
  grid[8][7] = 24;
  expect(countBrightness(grid)).toBe(36);
});

test('generateGrid', () => {
  expect(generateGrid(2, 2)).toEqual({ 0: { 0: 0, 1: 0 }, 1: { 0: 0, 1: 0 } });
});

test('runLightInstructionInPlaceOnGrid', () => {
  const grid = generateGrid(2, 2);

  runLightInstructionInPlaceOnGrid(
    { instruction: 'toggle', x1: 0, y1: 0, x2: 1, y2: 1 },
    grid,
    runLightInstructionOnLight,
  );
  expect(grid).toEqual({ 0: { 0: 2, 1: 2 }, 1: { 0: 2, 1: 2 } });
});

describe('runLightInstructionOnLight', () => {
  it('should increase brightness by 1', () => {
    expect(runLightInstructionOnLight(2, 'turn on')).toBe(3);
  });
  it('should decrease brightness by 1', () => {
    expect(runLightInstructionOnLight(2, 'turn off')).toBe(1);
  });
  it('should not decrease brightness by 1 if at 0', () => {
    expect(runLightInstructionOnLight(0, 'turn off')).toBe(0);
  });
  it('should increase brightness by 2', () => {
    expect(runLightInstructionOnLight(2, 'toggle')).toBe(4);
  });
});

describe('runOldLightInstructionOnLight', () => {
  it('should put brightness by 1', () => {
    expect(runOldLightInstructionOnLight(1, 'turn on')).toBe(1);
  });
  it('should put brightness at 0', () => {
    expect(runOldLightInstructionOnLight(1, 'turn off')).toBe(0);
  });
  it('should toggle light', () => {
    expect(runOldLightInstructionOnLight(0, 'toggle')).toBe(1);
  });
});
