const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

let number = 1;
const squareSize = 64;
const rows = canvas.height / squareSize;
const cols = canvas.width / squareSize;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    // Set a random fill color
    ctx.fillStyle = randomColor();
    // Draw a filled rectangle (the square)
    ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    // Set the fill color for the text to white
    ctx.fillStyle = "white";
    // Set the font size and style
    ctx.font = "20px Arial";
    // Calculate the position to center the text in the square
    const textWidth = ctx.measureText(number).width;
    const textX = col * squareSize + (squareSize - textWidth) / 2;
    const textY = row * squareSize + squareSize / 2 + 10; // The +10 is to roughly vertically center the text
    // Draw the text
    ctx.fillText(number, textX, textY);
    // Increment the number for the next square
    number++;
  }
}

// To save the canvas as an image, you can right-click on the canvas and select "Save image as..."

// Assuming script.js from the previous example

// After the grid has been drawn...

// const link = document.createElement("a");
// link.download = "grid_image.png";
// link.href = canvas.toDataURL("image/png");
// link.click();
