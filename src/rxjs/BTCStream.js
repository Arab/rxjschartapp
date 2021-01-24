import { interval, merge } from "rxjs";
import {
  map,
  scan,
  bufferCount,
  skipUntil,
  take,
  skip,
  publish,
} from "rxjs/operators";
import { generateNewBTCPrice } from "./helpers";
import moment from "moment";

const startValues = {
  date: Math.floor(Date.now()),
  price: 2039.81,
};

const createDate = (number) => startValues.date + number * 1000;
const formatDateToString = (date) => moment(date).format("YYYY-MM-DD HH:mm");

const BTCStream = interval(1).pipe(
  map((num) => {
    const date = createDate(num);
    const price = startValues.price;
    return { date, price };
  }),
  scan((acc, curr) => {
    const newPrice = generateNewBTCPrice(acc.price);
    return { ...curr, price: newPrice };
  }),
  bufferCount(60),
  map((arr) => {
    const date = formatDateToString(new Date(arr[0].date));
    const prices = arr.map((el) => el.price);
    const open = prices[0];
    const high = Math.max(...prices);
    const low = Math.min(...prices);
    const close = prices[prices.length - 1];
    return {
      date,
      open,
      high,
      low,
      close,
    };
  }),
  publish((multicasted) => {
    const bufferedData = multicasted.pipe(bufferCount(30), take(1));
    const regularStreamData = multicasted.pipe(
      skipUntil(bufferedData),
      skip(1)
    );
    return merge(bufferedData, regularStreamData);
  })
);

export default BTCStream;
