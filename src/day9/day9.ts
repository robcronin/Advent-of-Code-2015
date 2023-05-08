import { sumArr } from '../utils/array';

type DistanceMap = Record<string, Record<string, number>>;

const parseDistanceMap = (input: string[]): DistanceMap =>
  input.reduce((distanceMap: DistanceMap, route) => {
    const [a, _to, b, _equal, distance] = route.split(' ');
    return {
      ...distanceMap,
      [a]: { ...distanceMap[a], [b]: +distance },
      [b]: { ...distanceMap[b], [a]: +distance },
    };
  }, {});

const getUpperBound = (distanceMap: DistanceMap) => {
  const locations = Object.keys(distanceMap);
  const upperBound =
    2 * sumArr(Object.values(distanceMap[locations[0]]), (n) => n);
  return upperBound;
};

const recursiveFindExtremeDistanceFromPoint = (
  distanceMap: DistanceMap,
  start: string,
  locations: string[],
  currentDistance: number,
  startingBound: number,
  isLongest: boolean,
): number => {
  if (locations.length === 0) return currentDistance;
  const distances = distanceMap[start];
  return locations.reduce((extremeDistance, location) => {
    const remainingLocations = locations.filter((loc) => loc !== location);
    const distanceToHere = currentDistance + distances[location];
    const totalDistance = recursiveFindExtremeDistanceFromPoint(
      distanceMap,
      location,
      remainingLocations,
      distanceToHere,
      startingBound,
      isLongest,
    );
    if (
      isLongest
        ? totalDistance > extremeDistance
        : totalDistance < extremeDistance
    )
      extremeDistance = totalDistance;
    return extremeDistance;
  }, startingBound);
};

const findShortestTotalDistance = (
  distanceMap: DistanceMap,
  isLongest: boolean,
) => {
  const extremeBound = isLongest ? 0 : getUpperBound(distanceMap);
  const locations = Object.keys(distanceMap);
  const originDistances = locations.reduce(
    (acc, loc) => ({ ...acc, [loc]: 0 }),
    {},
  );
  return recursiveFindExtremeDistanceFromPoint(
    { ...distanceMap, origin: originDistances },
    'origin',
    locations,
    0,
    extremeBound,
    isLongest,
  );
};

export const day9 = (input: string[]) => {
  const distanceMap = parseDistanceMap(input);
  return findShortestTotalDistance(distanceMap, false);
};

export const day9part2 = (input: string[]) => {
  const distanceMap = parseDistanceMap(input);
  return findShortestTotalDistance(distanceMap, true);
};
