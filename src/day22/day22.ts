/*
  Magic Missile costs 53 mana. It instantly does 4 damage.
  Drain costs 73 mana. It instantly does 2 damage and heals you for 2 hit points.
  Shield costs 113 mana. It starts an effect that lasts for 6 turns. While it is active, your armor is increased by 7.
  Poison costs 173 mana. It starts an effect that lasts for 6 turns. At the start of each turn while it is active, it deals the boss 3 damage.
  Recharge costs 229 mana. It starts an effect that lasts for 5 turns. At the start of each turn while it is active, it gives you 101 new mana.
*/

type GameState = {
  shieldTimer: number;
  shieldArmor: number;
  poisonTimer: number;
  poisonDamage: number;
  rechargeTimer: number;
  rechargeMana: number;
  mana: number;
  meHealth: number;
  enemyHealth: number;
  enemyDamage: number;
  manaSpent: number;
  isMyTurn: boolean;
};
type MagicOption = {
  manaCost: number;
  isValid: (state: GameState) => boolean;
  stateUpdate: Partial<GameState>;
  meDamage?: number;
};

const getStartState = (input: string[]): GameState => {
  const [enemyHealth, enemyDamage] = input
    .map((line) => line.split(': ')[1])
    .map(Number);
  return {
    shieldTimer: 0,
    shieldArmor: 7,
    poisonTimer: 0,
    poisonDamage: 3,
    rechargeTimer: 0,
    rechargeMana: 101,
    mana: 500,
    meHealth: 50,
    enemyHealth,
    enemyDamage,
    manaSpent: 0,
    isMyTurn: true,
  };
};

let minManaFound = Number.MAX_VALUE;

const magicOptions: MagicOption[] = [
  { manaCost: 53, meDamage: 4, stateUpdate: {}, isValid: () => true },
  {
    manaCost: 73,
    meDamage: 2,
    stateUpdate: { meHealth: 2 },
    isValid: () => true,
  },
  {
    manaCost: 113,
    stateUpdate: {
      shieldTimer: 6,
    },
    isValid: (state: GameState) => state.shieldTimer <= 0,
  },
  {
    manaCost: 173,
    stateUpdate: {
      poisonTimer: 6,
    },
    isValid: (state: GameState) => state.poisonTimer <= 0,
  },
  {
    manaCost: 229,
    stateUpdate: {
      rechargeTimer: 5,
    },
    isValid: (state: GameState) => state.rechargeTimer <= 0,
  },
];

const getMagicOptions = (state: GameState): MagicOption[] =>
  magicOptions.filter(
    (option) =>
      option.isValid(state) &&
      option.manaCost <= state.mana &&
      option.manaCost + state.manaSpent < minManaFound,
  );

const recursiveGetMinManaToWin = (
  state: GameState,
  isHardMode: boolean,
): number => {
  if (minManaFound <= state.manaSpent) return minManaFound;
  const newState = { ...state };
  if (isHardMode && newState.isMyTurn) {
    newState.meHealth--;
    if (newState.meHealth <= 0) return Number.MAX_VALUE;
  }
  if (newState.poisonTimer > 0) {
    newState.enemyHealth -= newState.poisonDamage;
    newState.poisonTimer--;
  }
  if (newState.rechargeTimer > 0) {
    newState.mana += newState.rechargeMana;
    newState.rechargeTimer--;
  }
  const meShield = newState.shieldTimer > 0 ? newState.shieldArmor : 0;
  if (newState.shieldTimer > 0) newState.shieldTimer--;

  if (newState.enemyHealth <= 0) return newState.manaSpent;

  if (!state.isMyTurn) {
    const enemyDamage =
      newState.enemyDamage - meShield > 0 ? newState.enemyDamage - meShield : 1;
    newState.meHealth -= enemyDamage;
    if (newState.meHealth <= 0) return Number.MAX_VALUE;
    newState.isMyTurn = true;
    return recursiveGetMinManaToWin(newState, isHardMode);
  } else {
    const options = getMagicOptions(newState);
    if (options.length === 0) return Number.MAX_VALUE;
    let minManaOption = Number.MAX_VALUE;
    options.forEach((option) => {
      const innerNewState: GameState = { ...newState };
      innerNewState.manaSpent += option.manaCost;
      innerNewState.mana -= option.manaCost;
      Object.keys(option.stateUpdate).forEach((key) => {
        const stateKey = key as keyof GameState;
        innerNewState[stateKey] += option.stateUpdate[stateKey];
      });
      if (option.meDamage) {
        innerNewState.enemyHealth -= option.meDamage;
        if (innerNewState.enemyHealth <= 0) {
          minManaOption = Math.min(minManaOption, innerNewState.manaSpent);
        }
      }
      innerNewState.isMyTurn = false;
      minManaOption = Math.min(
        minManaOption,
        recursiveGetMinManaToWin(innerNewState, isHardMode),
      );
    });
    minManaFound = Math.min(minManaOption, minManaFound);

    return minManaOption;
  }
};

export const day22 = (input: string[]) => {
  const state = getStartState(input);
  minManaFound = Number.MAX_VALUE;
  return recursiveGetMinManaToWin(state, false);
};

export const day22part2 = (input: string[]) => {
  const state = getStartState(input);
  minManaFound = Number.MAX_VALUE;
  return recursiveGetMinManaToWin(state, true);
};
