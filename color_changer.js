//grab the header tag
var header = document.querySelector("h1");
//Change Default Color to Green
header.style.color = "green";
//Function for Random Outputing Random Colors
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color_code = "#";
    for (var j=0; j<6; j++){
        color_code += letters[Math.floor(Math.random()*16)];
    }
        return color_code;
}
//Function to declare
function changeHeaderColor(){
    colorInput = getRandomColor();
    header.style.color = colorInput;
}
//Set Interval for Color Changes
setInterval("changeHeaderColor()",500);