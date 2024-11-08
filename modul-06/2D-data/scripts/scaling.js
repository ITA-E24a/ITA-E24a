//Manuel mapping
function mapping(inputValue) {
  return (inputValue / 1000) * 300;
}

console.log("Manual mapping of 1000: " + mapping(1000));
console.log("Manual mapping of 500: " + mapping(500));
console.log("Manual mapping of 50: " + mapping(50));

//D3 mapping 'input'-domain til 'output'-range
//domain er et d3 keyword som definerer værdispændet og range (d3) er størrelsen til rådighed. Laver samme udregning som vist i vanilla linje 2-4
const scale = d3.scaleLinear().domain([0, 1000]).range([0, 300]);

console.log("Scale mapping of 1000: " + scale(1000));
console.log("Scale mapping of 500: " + scale(500));
console.log("Scale mapping of 50: " + scale(50));

const numbers = [5, 10, 2, 7, 12, 8];

//Vha. d3 findes højeste og laveste tal i numbers. Ligges i let variabler med min og maxValue
let maxValue = d3.max(numbers);
let minValue = d3.min(numbers);
console.log(maxValue);
console.log(minValue);

//Width og height til et SVG-element
const w = 500;
const h = 100;

//Skala for y-aksen. Domain anvendes igen og her ligges max-value ind på højeste værdi, i værdispændet.
//Range defineres fra 0 op til højden (h) af vores svg-element
const yScaleOLD = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(numbers, function (d) {
      return d;
    }),
  ])
  .range([0, h]);

//consollen skriver værdierne fra numbers
//Math.runder tallet op og ned yScaleOld henter hele værdispænd og størrelsen på skalaen
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
  .domain([
    0,
    d3.max(data, function (d) {
      return d[0];
    }),
  ])
  .range([0, w]);

//Skala for y-aksen
const yScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, function (d) {
      return d[1];
    }),
  ])
  .range([0, h]);

for (let d in data) {
  console.log("original x,y: " + data[d][0] + "," + data[d][1]);
  console.log(
    "scaled x,y: " +
      Math.round(xScale(data[d][0])) +
      "," +
      Math.round(yScale(data[d][1]))
  );
}
