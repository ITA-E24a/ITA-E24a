//Width og height til SVG-elementet
const w = 1000;
const h = 1000;

const dataset = [
  [50, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//SVG-elementet
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Scatter plot
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  //'d' er et element i datasettet
  //som er en del af et array (d0 = x) (d1 = y)
  .attr("cx", function (d) {
    return 50+d[0];
  })
  .attr("cy", function (d) {
    return 50+d[1];
  })
  .attr("r", function(d) {
    return ((d[0]+d[1])/2)/12;
  })
  .attr("fill", "#ff20ff");

