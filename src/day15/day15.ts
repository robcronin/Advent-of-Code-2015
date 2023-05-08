import { sumArr } from '../utils/array';
import { range } from '../utils/looping';

type Ingredient = {
  capacity: number;
  durability: number;
  flavor: number;
  texture: number;
  calories: number;
};

const parseIngredients = (input: string[]): Ingredient[] =>
  input.map((line) => {
    const groups = line.match(
      new RegExp(
        `[a-zA-Z]+: capacity (-?[0-9]+), durability (-?[0-9]+), flavor (-?[0-9]+), texture (-?[0-9]+), calories (-?[0-9]+)`,
      ),
    );
    if (!groups) throw new Error(`Error parsing ${line}`);
    const [_, capacity, durability, flavor, texture, calories] = groups;
    return {
      capacity: +capacity,
      durability: +durability,
      flavor: +flavor,
      texture: +texture,
      calories: +calories,
    };
  });

const getPropertySum = (
  ingredients: Ingredient[],
  quantities: number[],
  property: keyof Ingredient,
): number => {
  const sum = sumArr(
    ingredients,
    (ingredient, index) => ingredient[property] * quantities[index],
  );
  return sum > 0 ? sum : 0;
};

const getTasteScore = (ingredients: Ingredient[], quantities: number[]) =>
  getPropertySum(ingredients, quantities, 'capacity') *
  getPropertySum(ingredients, quantities, 'durability') *
  getPropertySum(ingredients, quantities, 'flavor') *
  getPropertySum(ingredients, quantities, 'texture');

const getMaxScore = (
  ingredients: Ingredient[],
  grams: number,
  requiredCalories?: number,
): number => {
  let max = 0;
  const numIngredients = ingredients.length;
  if (numIngredients > 4)
    throw new Error('Number of ingredients not supported');
  range(numIngredients >= 4 ? grams + 1 : 1).forEach((num3) => {
    range(numIngredients >= 3 ? grams - num3 + 1 : 1).forEach((num2) => {
      range(numIngredients >= 2 ? grams - num3 - num2 + 1 : 1).forEach(
        (num1) => {
          const num0 = grams - num3 - num2 - num1;
          const quantities = [num0, num1, num2, num3];
          if (requiredCalories !== undefined) {
            const calories = getPropertySum(
              ingredients,
              quantities,
              'calories',
            );
            if (calories !== requiredCalories) return max;
          }
          const tasteScore = getTasteScore(ingredients, quantities);
          if (tasteScore > max) max = tasteScore;
        },
      );
    });
  });
  return max;
};

export const day15 = (input: string[]) => {
  const ingredients = parseIngredients(input);
  return getMaxScore(ingredients, 100);
};

export const day15part2 = (input: string[]) => {
  const ingredients = parseIngredients(input);
  return getMaxScore(ingredients, 100, 500);
};
