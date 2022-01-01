import { getRandom } from './getRandom';

export const getRandomFromArray = <T>(arr: T[]): T =>
  arr[getRandom(0, arr.length - 1)];
