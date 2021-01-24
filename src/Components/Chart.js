import { useEffect, useState } from "react";
import VegaChart from "./VegaChart";

const Chart = ({ stream, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscription = stream.subscribe(
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
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div class="chart">
      {data.length > 0 ? (
        <VegaChart data={data} title={title} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Chart;
