import { maxArr } from '../utils/array';
import { range } from '../utils/looping';

type Reindeer = { speed: number; goTime: number; stopTime: number };

const parseReinders = (input: string[]): Reindeer[] =>
  input.map((line) => {
    const groups = line.match(
      new RegExp(
        `([a-zA-Z]+) can fly ([0-9]+) km/s for ([0-9]+) seconds, but then must rest for ([0-9]+) seconds.`,
      ),
    );
    if (!groups) throw new Error(`Error parsing ${line}`);
    const [_, _name, speed, goTime, stopTime] = groups;
    return { speed: +speed, goTime: +goTime, stopTime: +stopTime };
  });

const getDistancesOverTime = (reindeers: Reindeer[], time: number) =>
  reindeers.map((reindeer) => {
    const { speed, goTime, stopTime } = reindeer;
    const loopTime = goTime + stopTime;
    const fullLoops = Math.floor(time / loopTime);
    const leftoverTime = time % loopTime;
    const fullLoopDistance = fullLoops * goTime * speed;
    if (leftoverTime < goTime) return leftoverTime * speed + fullLoopDistance;
    else return goTime * speed + fullLoopDistance;
  });

// inefficient run time, efficient use of part 1 code 😜
const getPointsOverTime = (reindeers: Reindeer[], time: number) => {
  const points = reindeers.map(() => 0);
  range(time).forEach((seconds) => {
    const distancesOverTime = getDistancesOverTime(reindeers, seconds + 1);
    const maxDistance = maxArr(distancesOverTime, (i) => i);
    distancesOverTime.forEach((distance, index) => {
      if (distance === maxDistance) points[index]++;
    });
  });
  return points;
};

export const day14 = (input: string[], time: number) => {
  const reindeers = parseReinders(input);
  const distancesOverTime = getDistancesOverTime(reindeers, time);
  return maxArr(distancesOverTime, (i) => i);
};

export const day14part2 = (input: string[], time: number) => {
  const reindeers = parseReinders(input);
  const points = getPointsOverTime(reindeers, time);
  return maxArr(points, (i) => i);
};
