export function getRandomNumber() {
  const min = 0;
  const max = 99999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
