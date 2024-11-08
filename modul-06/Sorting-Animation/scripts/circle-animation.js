//SVG-elementet indsættes
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 2000)
  .attr("height", 1000);

//Vi putter en cirkel ind i SVG-elementet
svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 100)
  .attr("fill", "#ab351b");

  d3.select("#transitionStart")
  .on('click', function () {
  d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(4000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 1200)
  .attr("cy", 400)
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(4000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 1200)
  .attr("cx", 100)


  .transition()
  .attr("r",110)
  .attr("fill", " #df902d ")

  .transition()
  .duration(4000)
  .attr("r", 90)
  .attr("cx", 100)
  .attr("cy", 100)
  });
