//Width og height til SVG-elementet
const w = 1000;
const h = 1000;
let size = 0;

//Dataset som er grundlag for vores plot
const dataset = [
  [10, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//SVG-elementet
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

console.log(size);
//Viser plottet pba forudgående variabler
showPlot();

//Knap som ændrer let = size til 100 og derefter kører funktionen som indeholder plottet, igen. 
d3.select("#move")
  .on('click', function () {
    console.log("click");
    size = 100;
    showPlot()});

//definerer funktionen "showPlot"
function showPlot () {
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
  //Henter værdien af variablen size ud i console
    console.log(size);
  //size + hentet data "skubber" plotsene længere ind på siden
    return size+d[0];
  })
  .attr("cy", function (d) {
  //size + hentet data "skubber" plotsene ned på siden
  return size+d[1];
  
  })
  .attr("r", 10)
  .attr("fill", "#f115f0");
}
