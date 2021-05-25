const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#";
    for (let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
document.getElementById("myInput").value= hexColor; //implement for taking value to the input field
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

//my extension part for copying the value of the color
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 7);
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }