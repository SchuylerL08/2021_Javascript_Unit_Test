/* Put code for the task below */

/* Changes directions text to "I Clicked It!" */
function changeDirections(){
    /* Makes directions invisible */
    var directions = document.getElementById("basicDirections");
    directions.style.display = "none";

    /* Makes text visible */
    var newText = document.getElementById("directionsReplacement");
    newText.style.display = "block";
}