import { parseLines } from '../utils/input';

type ShopItem = {
  cost: number;
  damage: number;
  armor: number;
};
type Shop = { weapons: ShopItem[]; armors: ShopItem[]; rings: ShopItem[] };

type Player = { hitPoints: number; damage: number; armor: number };

const parseShopItemSection = (costString: string): ShopItem[] =>
  parseLines(costString)
    .slice(1)
    .reduce((costs: ShopItem[], line) => {
      const groups = line.match(
        new RegExp('[a-zA-Z]+ (\\+[123])? +([0-9]+) +([0-9]+) +([0-9]+)'),
      );
      if (!groups) throw new Error(`Invalid line: ${line}`);
      const [_, __, cost, damage, armor] = groups;
      return [...costs, { cost: +cost, damage: +damage, armor: +armor }];
    }, []);

const getNullItem = (): ShopItem => ({ cost: 0, damage: 0, armor: 0 });

const parseShop = (costInput: string[]): Shop => {
  const [weaponString, armorString, ringString] = costInput;
  return {
    weapons: parseShopItemSection(weaponString),
    armors: [...parseShopItemSection(armorString), getNullItem()],
    rings: [...parseShopItemSection(ringString), getNullItem()],
  };
};

const parseEnemy = (input: string[]): Player => {
  const [hitPoints, damage, armor] = input
    .map((line) => line.split(': ')[1])
    .map(Number);
  return { hitPoints, damage, armor };
};

const getIWin = (me: Player, enemy: Player): boolean => {
  const myDamage = me.damage - enemy.armor > 0 ? me.damage - enemy.armor : 1;
  const enemyDamage = enemy.damage - me.armor > 0 ? enemy.damage - me.armor : 1;
  const myMovesToKill = Math.ceil(enemy.hitPoints / myDamage);
  const enemeyMovesToKill = Math.ceil(me.hitPoints / enemyDamage);
  return myMovesToKill <= enemeyMovesToKill;
};

const getExtremeCost = (
  shop: Shop,
  enemy: Player,
  myHealth: number,
  isMax?: boolean,
): number => {
  const { weapons, armors, rings } = shop;
  let extremeCost = isMax ? 0 : Number.MAX_VALUE;
  weapons.forEach((weapon) => {
    armors.forEach((armor) => {
      rings.forEach((ring1, index) => {
        rings.slice(index + 1).forEach((ring2) => {
          const totalCost = weapon.cost + armor.cost + ring1.cost + ring2.cost;
          const myDamage =
            weapon.damage + armor.damage + ring1.damage + ring2.damage;
          const myArmor =
            weapon.armor + armor.armor + ring1.armor + ring2.armor;
          const me = { hitPoints: myHealth, damage: myDamage, armor: myArmor };
          if (isMax) {
            if (totalCost > extremeCost && !getIWin(me, enemy)) {
              extremeCost = totalCost;
            }
          } else {
            if (totalCost < extremeCost && getIWin(me, enemy)) {
              extremeCost = totalCost;
            }
          }
        });
      });
    });
  });
  return extremeCost;
};

export const day21 = (input: string[], shopItemInput: string[]) => {
  const shop = parseShop(shopItemInput);
  const enemy = parseEnemy(input);
  return getExtremeCost(shop, enemy, 100);
};

export const day21part2 = (input: string[], shopItemInput: string[]) => {
  const shop = parseShop(shopItemInput);
  const enemy = parseEnemy(input);
  return getExtremeCost(shop, enemy, 100, true);
};
