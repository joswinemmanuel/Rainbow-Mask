//alert("FIND ME")

var bg = document.querySelector("body")
var header = document.querySelector("h1")
var counter = 0

const intr = setInterval("changeBackgroundColor()", 100);

header.addEventListener('mousedown', function() {
    header.style.color = "blue"
    header.textContent = "THE MAGIC IS IN SELF BELIEF";
    bg.bgColor = "white";
    clearInterval(intr);
})


function changeBackgroundColor() {
    rainbow = ["#ff0000", "#ff8317", "#fffb00", "#1cfc03", "#005eff", "#00d9ff", "#e100ff"]
    colorInput = rainbow[counter++]
    if(counter === 7) {
        counter = 0
    }
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    bg.bgColor = colorInput;
    header.style.color = colorInput;
}

