import { useEffect, useState } from "react";
import "./App.css";
import VegaChart from "./Components/VegaChart";
import BTCStream from "./rxjs/BTCStream";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const BTCsubscription = BTCStream.subscribe(
      (next) => {
        if (next) {
          if (Array.isArray(next)) {
            setData(next);
          } else {
            setData((data) => {
              if (data.length === 30) {
                const newData = [...data];
                newData.shift();
                newData.push(next);
                return newData;
              } else {
                return [...data, next];
              }
            });
          }
        } else {
          setData([]);
        }
      },
      (error) => console.log(error),
      () => console.log("stream complete")
    );
    return () => {
      BTCsubscription.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {data.length > 0 ? (
        <VegaChart data={data} title="BTC" />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
