export const vegaSchema = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.json",
  height: 360,
  width: 640,
  data: {
    name: "vegaData",
    format: {
      parse: {
        date: "date:'%Y-%m-%d'",
      },
    },
  },
  encoding: {
    x: { field: "date", type: "temporal", title: "Date in 2009" },
    y: { title: "price" },
    color: {
      condition: {
        test: "datum.open < datum.close",
        value: "#06982d",
      },
      value: "#ae1325",
    },
  },
  layer: [
    {
      mark: "rule",
      encoding: {
        y: {
          field: "low",
          type: "quantitative",
          scale: { zero: false },
        },
        y2: { field: "high", type: "quantitative" },
      },
    },
    {
      mark: "bar",
      encoding: {
        y: { field: "open", type: "quantitative" },
        y2: { field: "close", type: "quantitative" },
        size: { value: 5 },
      },
    },
  ],
};
