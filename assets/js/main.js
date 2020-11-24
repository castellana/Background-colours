// EJERCICIO Lev3_1 Dynamische Webseite
// Schreibe eine kleine App die die Hintergrundfarbe ändert.
// Schreibe 3 Funktionen:
// Ändere die Hintergrundfarbe, wenn auf einen Button geklickt wird.
// Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.
// konvertiere Dezimal zu Hex.

let count = 0
const andernHintergrund = (farbe) => {
    count++
    document.querySelector('body').style.background = farbe
    document.getElementById('demo').innerHTML = `Wir haben die Farbe schon ${count} verändert`
}

let red = 255;
let green = 255
let blue = 255
const andernRegler = () => {


    //necesitamos condición para ver si la persona elige rojo, verde ó azul.

    if(event.target.id === "rot") {
        red = event.target.value
    } else if (event.target.id === "grun"){
        green = event.target.value
    } else if (event.target.id === "blau"){
        blue = event.target.value
    }
        console.log("rot", red, "Grün:", green, "Blau: ", blue);
    // console.log(event.target.id); //esto lo necesitamos
    // console.log(event.target.value); //y esto también
    const farbe = `rgb(${red}, ${green}, ${blue})`
    console.log(farbe);
    document.querySelector("body").style.background = farbe
    document.getElementById('demo').innerHTML = farbe + '#' + (red * 1)
.toString(16) + (green * 1).toString(16) + (blue * 1).toString(16)
}
