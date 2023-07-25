const { createCanvas } = require("canvas");

// drawing canvas signature by giving x, y coordinates  of array of objects

const drawCanvasSignature = async (signatures) => {
  const canvas = createCanvas(400, 350);
  const context = canvas.getContext("2d");
  context.lineWidth = 1.5;
  context.strokeStyle = "black";
  for (const signature of signatures) {
    context.beginPath();
    context.moveTo(signature[0].x, signature[0].y);
    for (let i = 1; i < signature.length; i++) {
      context.lineTo(signature[i].x, signature[i].y);
    }
    context.stroke();
  }
  return canvas.toDataURL();
};

module.exports = {
  drawCanvasSignature,
};
