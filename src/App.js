import { useEffect, useState } from "react";
import "./App.css";
import VegaChart from "./Components/VegaChart";
import { vegaData } from "./Components/VegaChart/vegaData";
import createStream from "./rxjs/createStream";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscription = createStream.subscribe(
      (next) => {
        if (next) {
          setData((data) => [...data, next]);
        } else {
          setData([]);
        }
      },
      (error) => console.log(error),
      () => console.log("stream complete")
    );
    return subscription.unsubscribe;
  }, []);

  return (
    <div className="App">
      <VegaChart data={vegaData} />
      {data &&
        data.length > 0 &&
        data.map((el, i) => (
          <div
            key={i}
          >{`symbol: ${el.symbol}, data: ${el.date}, price: ${el.price}`}</div>
        ))}
    </div>
  );
}

export default App;
