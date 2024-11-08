//SVG-elementet indsættes
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

//Vi putter en cirkel ind i SVG-elementet
svg
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 50)
  .attr("fill", "#49d6d1");

d3.select("#knap")
.on("click", function(){
d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx og cy rykkes således fra 100 - 600
  .attr("cy", 600)
  .attr("cx", 600)
//herunder laves både størrelse og farve om
  .transition()
  .duration(2000)
  .attr("r",100)
  .attr("fill", "pink")
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(1000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx og cy rykkes således tilbage fra 600 - 100
  .attr("cy", 100)
  .attr("cx", 100);
})

/*
d3.select("#knap")
  .on("click", function () {
    console.log("Button clicked")
    d3.selectAll("circle")
      .transition() 
      .duration(2000)
      .attr("cx", 600)
      .transition()
      .duration(2000)
      .attr("cx", 100)
  });
*/
