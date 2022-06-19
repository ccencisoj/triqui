function getRandomInt(min, max) {
  const randomInt = parseInt(Math.random() * (max - min) + min);
  return randomInt === 0 ? 1 : randomInt;
}

export default getRandomInt;