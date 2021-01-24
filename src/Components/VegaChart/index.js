import { VegaLite } from "react-vega";
import { vegaSchema } from "./vegaSchema";

const VegaChart = ({ data, title }) => {
  const vegaData = { vegaData: [...data] };
  return <VegaLite spec={{ ...vegaSchema, title }} data={vegaData} />;
};

export default VegaChart;
