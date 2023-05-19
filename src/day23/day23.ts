enum InstructionType {
  HLF = 'hlf',
  INC = 'inc',
  TPL = 'tpl',
  JMP = 'jmp',
  JIE = 'jie',
  JIO = 'jio',
}
enum Register {
  A = 'a',
  B = 'b',
}
type SimpleInstructionType =
  | InstructionType.HLF
  | InstructionType.INC
  | InstructionType.TPL;

type Instruction =
  | {
      type: SimpleInstructionType;
      register: Register;
      jump: undefined;
    }
  | {
      type: InstructionType.JMP;
      register: undefined;
      jump: number;
    }
  | {
      type: InstructionType.JIE | InstructionType.JIO;
      register: Register;
      jump: number;
    };

type State = { [Register.A]: number; [Register.B]: number; index: number };

const parseInstructions = (input: string[]): Instruction[] =>
  input.map((line) => {
    const [type, first, second] = line.split(' ');
    if (
      [InstructionType.HLF, InstructionType.INC, InstructionType.TPL].includes(
        type as InstructionType,
      )
    )
      return {
        type: type as SimpleInstructionType,
        register: first as Register,
      };
    if (type === InstructionType.JMP) return { type: type, jump: +first };
    return {
      type: type as InstructionType.JIE | InstructionType.JIO,
      register: first[0] as Register,
      jump: +second,
    };
  });

const runInstruction = (instruction: Instruction, state: State): State => {
  const { type, register, jump } = instruction;
  switch (type) {
    case InstructionType.HLF:
      return {
        ...state,
        [register]: state[register] / 2,
        index: state.index + 1,
      };
    case InstructionType.TPL:
      return {
        ...state,
        [register]: state[register] * 3,
        index: state.index + 1,
      };
    case InstructionType.INC:
      return {
        ...state,
        [register]: state[register] + 1,
        index: state.index + 1,
      };
    case InstructionType.JMP:
      return { ...state, index: state.index + jump };
    case InstructionType.JIE:
      if (state[register] % 2 === 0)
        return { ...state, index: state.index + jump };
    case InstructionType.JIO:
      if (state[register] === 1) return { ...state, index: state.index + jump };
  }
  return { ...state, index: state.index + 1 };
};

const runInstructions = (
  instructions: Instruction[],
  startState: Partial<State>,
): State => {
  let state = { a: 1, b: 0, index: 0, ...startState };
  while (state.index >= 0 && state.index < instructions.length) {
    state = runInstruction(instructions[state.index], state);
  }
  return state;
};

export const day23 = (input: string[]) => {
  const instructions = parseInstructions(input);
  const finalState = runInstructions(instructions, { a: 0, b: 0 });
  return finalState.b;
};

export const day23part2 = (input: string[]) => {
  const instructions = parseInstructions(input);
  const finalState = runInstructions(instructions, { a: 1, b: 0 });
  return finalState.b;
};
