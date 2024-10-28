/* viser indholdet af et array i en række <p> elementer */
let dataset = [1, 2, 3, 4, 5]; 

d3.select("#data")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function (d) {
    return d;
  });
  // sætter hvert <p> element til at være værdien fra datasettet 1, 2, 3, 4, 5
