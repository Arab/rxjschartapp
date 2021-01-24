export const vegaSchema = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.json",
  height: 360,
  width: 640,
  data: {
    name: "vegaData",
    format: {
      parse: {
        date: "date:'%Y-%m-%d %H:%M'",
      },
    },
  },
  encoding: {
    x: {
      field: "date",
      type: "ordinal",
      timeUnit: "yearmonthdatehoursminutes",
      title: "Time frame 5 minutes",
    },
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
