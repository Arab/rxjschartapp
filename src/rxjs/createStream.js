import { interval } from "rxjs";
import { map, scan } from "rxjs/operators";
import { generateNewBTCPrice } from "./helpers";

const startValues = {
  symbol: "MSFT",
  date: Math.floor(Date.now()),
  price: 39.81,
};

const createDate = (number) => startValues.date + number;

const createStream = interval(1000).pipe(
  map((num) => {
    const symbol = startValues.symbol;
    const date = createDate(num);
    const price = startValues.price;
    return { symbol, date, price };
  }),
  scan((acc, curr) => {
    const newPrice = generateNewBTCPrice(acc.price);
    return { ...curr, price: newPrice };
  })
);

export default createStream;
