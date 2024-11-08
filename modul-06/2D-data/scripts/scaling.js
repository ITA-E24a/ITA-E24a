//Manuel mapping
function mapping(inputValue) {
  return (inputValue / 1000) * 300;
}
//Logger værdien / 1000 * 300 ud fra funktionen ovenover
console.log("Manual mapping of 1000: " + mapping(1000));
console.log("Manual mapping of 500: " + mapping(500));
console.log("Manual mapping of 50: " + mapping(50));

//D3 mapping 'input'-domain til 'output'-range
const scale = d3.scaleLinear().domain([0, 1000]).range([0, 300]);

//Gør det samme som manuelt, her bruger vi blot d3 som hjælp
console.log("Scale mapping of 1000: " + scale(1000));
console.log("Scale mapping of 500: " + scale(500));
console.log("Scale mapping of 50: " + scale(50));

//Vores array
const numbers = [5, 10, 2, 7, 12, 8];

let maxValue = d3.max(numbers);
let minValue = d3.min(numbers);
console.log(maxValue);
console.log(minValue);

//Width og height til et SVG-element
const w = 500;
const h = 100;

//Skala for y-aksen - laves ud fra d3 scale hvor vores domæne går fra 0-12 og vores range går fra 0-100
const yScaleOLD = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(numbers, function (d) {
      return d;
    }),
  ])
  .range([0, h]);

 //Viser det oprindelige tal, og det skalerede tal som kommer fra vores d3 scale --> her 5/12*100 = 42
 //Math.round afrunder tallet
for (let n in numbers) {
  console.log("original value: " + numbers[n]);
  console.log("scaled value: " + Math.round(yScaleOLD(numbers[n])));
}

//For to-dimensionelt data
const data = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//Skala for x-aksen
const xScale = d3
  .scaleLinear()
//Her laver vi et domæne der går fra 0 til vores max x-værdi = d[0] - her 480
  .domain([
    0,
    d3.max(data, function (d) {
      return d[0];
    }),
  ])
//Her laver vi en range der går fra 0 til 500
  .range([0, w]);

//Skala for y-aksen --> samme som ovenover bare med y-værdi - her 95
const yScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, function (d) {
      return d[1];
    }),
  ])
//Samme som ovenover bare med 100
  .range([0, h]);

//Laver et for loop der kører gennem alt vores data, og logger original værdi for x og for y
for (let d in data) {
  console.log("original x,y: " + data[d][0] + "," + data[d][1]);
//Logger derefter den skalerede værdi for x og for y, ud fra vores x og y skalering fra d3
  console.log(
    "scaled x,y: " +
      Math.round(xScale(data[d][0])) +
      "," +
      Math.round(yScale(data[d][1]))
  );
}
