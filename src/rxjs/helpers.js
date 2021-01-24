export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomSign = () => {
  const rand = Math.random();
  if (rand > 0.5) {
    return 1;
  } else {
    return -1;
  }
};

const VOLATILITY_BTC = 42;

export const generateNewBTCPrice = (oldPrice) => {
  let changePercent = 2 * Math.random() * VOLATILITY_BTC;
  if (changePercent > VOLATILITY_BTC) {
    changePercent = changePercent - 2 * VOLATILITY_BTC;
  }

  return Math.floor((oldPrice + (oldPrice * changePercent) / 1000) * 100) / 100;
};
