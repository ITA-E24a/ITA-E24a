/* viser indholdet af et array i en række <p> elementer */
let dataset = [1, 2, 3, 4, 5]; 

d3.select("#data") // vælger html-element med id "data"
  .selectAll("p") // vælger alle <p> elementer 
  .data(dataset) // binder data i dataset til de valgte <p> elementer
  .enter() // opretter nyt udvalg for de dataelementer der ikke har dom-elementer
  .append("p") // tifløjer nyt <p> element for hvert dataelement
  .text(function (d) {
    return d;
  });
  // sætter hvert <p> element til at være værdien fra datasettet 1, 2, 3, 4, 5
