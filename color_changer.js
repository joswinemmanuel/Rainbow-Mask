alert("Click and find the MESSAGE")

var bg = document.querySelector("body")
var header = document.querySelector("h1")
var paragraph = document.querySelector("p")
var counter = 0

var intr = setInterval("changeBackgroundColor()", 150);

header.addEventListener('mousedown', function () {
    header.style.color = "blue"
    header.textContent = "THE MAGIC IS IN SELF BELIEF";
    bg.bgColor = "black";
    header.style.color = "#1cfc03";
    paragraph.style.color = "#1cfc03";
    clearInterval(intr);
})

function changeBackgroundColor() {
    rainbow = ["#ff0000", "#ff8317", "#fffb00", "#1cfc03", "#005eff", "#00d9ff", "#e100ff"]
    colorInput = rainbow[counter++]
    if (counter === 7) {
        counter = 0
    }
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    bg.bgColor = colorInput;
    header.style.color = colorInput;
}

