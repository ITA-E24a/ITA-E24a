//Let-variablen er ved navnet "dataset" defineret som et array med værdierne 1-5
let dataset = [1, 2, 3, 4, 5];


//Vælger elementer med id="data"
d3.select("#data")
//Vælger alle <p>-elementer
  .selectAll("p")
//Anvender den let-variablen fra linje 2
  .data(dataset)
//Laver en række <p> elementer tilvarende vores array fra 'dataset'
  .enter()
//Ændrer <p>-elementer 
  .append("p")
//Teksten ændres med nedenstående function
  .text(function (d) {
    return d;
  });
