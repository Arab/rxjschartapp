export const getRandomSign = () => {
  const rand = Math.random();
  if (rand > 0.5) {
    return 1;
  } else {
    return -1;
  }
};

export const generateNewBTCPrice = (oldPrice) => {
  const change = Math.random();
  const sign = getRandomSign();
  const newPrice = oldPrice + change * sign;
  if (newPrice > 20) {
    return newPrice;
  } else {
    return newPrice + 10;
  }
};

export const generateNewETHPrice = (oldPrice) => {
  const change = Math.random();
  const sign = getRandomSign();
  const newPrice = oldPrice + change * sign;
  if (newPrice > 20) {
    return newPrice;
  } else {
    return newPrice + 10;
  }
};
