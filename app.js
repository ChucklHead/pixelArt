const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

const color = document.getElementById("colorPicker")

const topLeftRectangleCords = [];
const bottomRightRectangleCords = [];


ctx.strokeStyle = "#c7c7c7";

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawGrid() {
    var x = 20
    var y = 20
    while (x < 1900) {
        drawLine(x, 0, x, 960)
        x = x + 20
    }
    while (y < 960) {
        drawLine(0, y, 1900, y)
        y = y + 20
    }
}
drawGrid()

function topLeftRectangle() {
    var x = 0
    var y = 0
    while (y < 960) {
        if (x > 1880) {
            y = y + 20
            x = 0
        } else {
            Pairs = [];
            Pairs.push(x, y)
            topLeftRectangleCords.push(Pairs)
            x = x + 20
        }
    }
}
topLeftRectangle()

function bottomRightRectangle() {
    var x = 20
    var y = 20
    while (y < 980) {
        if (x > 1900) {
            y = y + 20
            x = 20
        } else {
            Pairs = [];
            Pairs.push(x, y)
            bottomRightRectangleCords.push(Pairs)
            x = x + 20
        }
    }
}
bottomRightRectangle()

console.log(topLeftRectangleCords)
console.log(bottomRightRectangleCords)

document.addEventListener('mousedown', mouseCords);

function mouseCords(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y)
    ctx.fillStyle = color.value;
    var i = 0;
    //console.log(bottomRightRectangleCords[0][0]) prints 50 first cord of first array
    while (i < topLeftRectangleCords.length) {
        if (bottomRightRectangleCords[i][0] > x && x > topLeftRectangleCords[i][0] && bottomRightRectangleCords[i][1] > y && y > topLeftRectangleCords[i][1]) {
            console.log("BIG BRAIN GANG")
            ctx.fillRect(topLeftRectangleCords[i][0], topLeftRectangleCords[i][1], 20, 20)
            return
        } else {
            i = i + 1
        }
    }
}
