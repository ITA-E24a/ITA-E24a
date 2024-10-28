/* læser data ind med d3 og viser dataen på siden */
d3.json("data/albums.json").then(function (data) {
  // Indlæser JSON-data fra filen "albums.json" og udfører en funktion, når dataene er hentet.
  
    console.log(data);
  // Udskriver de hentede data til konsollen for at kontrollere dem.
  
    d3.select("#dataJSON").append("h2").text("JSON Data:");
  // Tilføjer en <h2> overskrift med teksten "JSON Data:" til elementet med id "dataJSON".
  
    d3.select("#dataJSON")
      .selectAll("p")
      // Vælger alle <p> (afsnit) elementer inden for elementet med id "dataJSON".
      .data(data)
      // Binder dataene fra JSON-filen til de valgte <p> elementer.
      .enter()
      // Opretter et nyt udvalg for de dataelementer, der ikke har tilsvarende DOM-elementer.
      .append("p")
      // Tilføjer et nyt <p> element for hvert dataelement i "enter" udvalget.
      .text(function (album) {
        return (
          album.artistName +
          " - " +
          album.albumName +
          " - " +
          album.trackList.length
        );
      });
  // Sætter tekstindholdet for hvert <p> element til at være kunstnerens navn, albumnavnet og antallet af numre.
  
    let cdObjects = [];
    // Opretter en tom liste til CD-objekter.
    for (let i in data) {
      let cd = new CD(
        data[i].artistName,
        data[i].albumName,
        data[i].trackList.length
      );
      cdObjects.push(cd);
    }
  // Gennemløber hvert element i dataene og opretter et nyt CD-objekt med kunstnerens navn, albumnavnet og antallet af numre, og tilføjer det til cdObjects-listen.
  
    console.log(cdObjects);
  // Udskriver listen af CD-objekter til konsollen.
  
    d3.select("#dataOBJ").append("h2").text("Object Data:");
  // Tilføjer en <h2> overskrift med teksten "Object Data:" til elementet med id "dataOBJ".
  
    d3.select("#dataOBJ")
      .selectAll("p")
      // Vælger alle <p> (afsnit) elementer inden for elementet med id "dataOBJ".
      .data(cdObjects)
      // Binder CD-objekterne til de valgte <p> elementer.
      .enter()
      // Opretter et nyt udvalg for de CD-objekter, der ikke har tilsvarende DOM-elementer.
      .append("p")
      // Tilføjer et nyt <p> element for hvert CD-objekt i "enter" udvalget.
      .text(function (albumObj) {
        return (
          albumObj.artist +
          " - " +
          albumObj.title +
          " - " +
          albumObj.numberOfTracks
        );
      });
  // Sætter tekstindholdet for hvert <p> element til at være kunstnerens navn, albumnavnet og antallet af numre for hvert CD-objekt.
  });
  
  function CD(artist, title, numberOfTracks) {
    this.artist = artist;
    this.title = title;
    this.numberOfTracks = numberOfTracks;
  }
  // Definerer en konstruktørfunktion til at oprette CD-objekter med kunstnerens navn, albumnavnet og antallet af numre.
  