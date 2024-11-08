//Henter array med fra albums.json til consolen 
d3.json("data/albums.json").then(function (data) {
  console.log(data);
  incomingData = data;
  doStuff(data);

//Ændrer elementet med id=dataJSON til <h2> med teksten "JSON Data"
  d3.select("#dataJSON").append("h2").text("JSON Data:");

//Vælger elementet med id="dataJSON"
  d3.select("#dataJSON")
//Vælger alle <p> elementer
    .selectAll("p")
//Parser og skriver data fra albums? HVORFOR??? 
    .data(data)
//Hvis der er flere data-elementer end <p> laver .enter() nye <p> pladsholdere
    .enter()
//Ændrer <p>-elementerne til efterfølgende tekst
    .append("p")
//albums ændres til album når det omhandler et enkeltstående object i arrayet. 
    .text(function (album) {
//Funktionen henter (et album til hvert <p>-element) artistName, albumName og giver tæller antallet af tracks i det givne album
      return (
        album.artistName +
        " - " +
        album.albumName +
        " - " +
        album.trackList.length
      );
    });

  let cdObjects = [];
  for (let i in data) {
    let cd = new CD(
      data[i].artistName,
      data[i].albumName,
      data[i].trackList.length
    );
    cdObjects.push(cd);
  }

  console.log("TEST: " + cdObjects[4].toString());

  console.log(cdObjects);

  d3.select("#dataOBJ").append("h2").text("Object Data:");
  d3.select("#dataOBJ")
    .selectAll("p")
    .data(cdObjects)
    .enter()
    .append("p")
    .text(function (albumObj) {
      return (
        albumObj.artist +
        " - " +
        albumObj.title +
        " - " +
        albumObj.numberOfTracks
      );
    });
});

function doStuff(dataset) {
  console.log(dataset);
}
console.log(incomingData);

function CD(artist, title, numberOfTracks) {
  this.artist = artist;
  this.title = title;
  this.numberOfTracks = numberOfTracks;
  this.toString = () => {
    return this.artist + " " + this.title;
  };
}
