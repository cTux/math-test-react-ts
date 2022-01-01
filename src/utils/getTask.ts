import { getRandomFromArray } from './getRandomFromArray';
import { getRandom } from './getRandom';
import { Task } from '../components/TaskForm/types';
import { OperationType } from '../enums/OperationType';

export const getTask = (operations: OperationType[]): Task => {
  const randomOperation = getRandomFromArray<OperationType>(operations);

  switch (randomOperation) {
    case OperationType.Multiplication:
      const n1m = getRandom(1, 10);
      const n2m = getRandom(1, 10);
      return {
        text: `${n1m} * ${n2m} = ?`,
        correctAnswer: `${n1m * n2m}`,
      };

    case OperationType.Addition:
      const n1a = getRandom(1, 30);
      const n2a = getRandom(1, 30);
      return {
        text: `${n1a} + ${n2a} = ?`,
        correctAnswer: `${n1a + n2a}`,
      };

    case OperationType.Subtraction:
      const n1s = getRandom(30, 40);
      const n2s = getRandom(1, 29);
      return {
        text: `${n1s} - ${n2s} = ?`,
        correctAnswer: `${n1s - n2s}`,
      };

    case OperationType.Division:
      const n2d = getRandom(2, 9);
      const n3d = getRandom(2, 9);
      const n1d = n2d * n3d;
      return {
        text: `${n1d} / ${n2d} = ?`,
        correctAnswer: `${n3d}`,
      };
  }
};
