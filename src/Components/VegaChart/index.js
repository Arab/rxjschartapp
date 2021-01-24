import { VegaLite } from "react-vega";
import { vegaSchema } from "./vegaSchema";

const VegaChart = ({ data }) => {
  return <VegaLite spec={vegaSchema} data={data} />;
};

export default VegaChart;
