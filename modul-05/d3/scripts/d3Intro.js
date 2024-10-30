// variabel ved navn datasæt som består array fra 1-5
let dataset = [1, 2, 3, 4, 5];

// her vælges HTML-elementet med id data
d3.select("#data")
// Her vælg alle p-elementer
  .selectAll("p")
// Binder dataset-arrayet til udvalget af <p>-elementer.
  .data(dataset)
// For hver datapunkt, der ikke har et tilsvarende <p>, skabes et nyt element.
  .enter()
// Tilføjer et nyt <p>-element i DOM’en for hvert datapunkt.
  .append("p")
// Denne del af koden sætter tekstindholdet i hvert af de <p>-elementer, vi lige har tilføjet, til at være lig med værdien af hvert datapunkt.
  .text(function (d) {
    return d;
  });
