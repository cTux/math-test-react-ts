export const getRandom = (minValue: number, maxValue: number): number =>
  Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
