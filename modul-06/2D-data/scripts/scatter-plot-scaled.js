// Width og height til SVG-elementet
const w = 1000; // Bredde på SVG-elementet
const h = 150;  // Højde på SVG-elementet

// Dataset med koordinater (x, y)
const dataset = [
  [5, 20],
  [80, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

// Opretter SVG-elementet og sætter bredde og højde
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

// Skala for x-aksen, så data passer indenfor SVG-elementets bredde
const xScale = d3
  .scaleLinear()
  .domain([
    d3.min(dataset, function (d) { return d[0]; }), // Mindste x-værdi
    d3.max(dataset, function (d) { return d[0]; })  // Største x-værdi
  ])
  .range([30, w - 30]) // Plads på begge sider af SVG-elementet
  .nice(); // Runder skalaen for at få "pænere" værdier

// Skala for y-aksen, så data passer indenfor SVG-elementets højde
const yScale = d3
  .scaleLinear()
  .domain([
    d3.min(dataset, function (d) { return d[1]; }), // Mindste y-værdi
    d3.max(dataset, function (d) { return d[1]; })  // Største y-værdi
  ])
  .range([30, h - 30]) // Plads over og under i SVG-elementet
  .nice(); // Runder skalaen for "pænere" værdier

// Opretter cirkler til scatter plot baseret på dataset
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  // Sætter x-koordinat (cx) for hver cirkel baseret på x-værdi, skaleret med xScale
  .attr("cx", function (d) {
    return xScale(d[0]);
  })
  // Sætter y-koordinat (cy) for hver cirkel baseret på y-værdi, skaleret med yScale
  .attr("cy", function (d) {
    return yScale(h - d[1]);
  })
  // Sætter radius på cirklen til kvadratroden af y-værdien (så større y-værdi giver større cirkel)
  .attr("r", function (d) {
    return Math.sqrt(d[1]);
  });

// Tilføjer tekstlabels til hver cirkel
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  // Viser y-værdien som tekstlabel
  .text(function (d) {
    return d[1];
  })
  // Sætter x-positionen for teksten (lidt til højre for cirklen)
  .attr("x", function (d) {
    return xScale(d[0]) + 5;
  })
  // Sætter y-positionen for teksten (lidt over cirklen)
  .attr("y", function (d) {
    return yScale(h - d[1]) - 5;
  })
  // Formaterer teksten
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red"); // Sætter tekstfarven til rød
