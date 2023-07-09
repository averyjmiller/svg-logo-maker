const { Square, Circle, Triangle } = require('./shapes.js');

function initShape(data) {
  if(data.shape === "Square") {
    return new Square();
  } else if(data.shape === "Circle") {
    return new Circle();
  } else if(data.shape === "Triangle") {
    return new Triangle();
  } else {
    throw new Error('Unknown shape input');
  }
}

function generateShape(data) {
  const shape = initShape(data);

  shape.setColor(data.color);
  shape.setText(data.text, data.textColor);

  return shape;
}

function generateLogo(data) {
  const shape = generateShape(data);

  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

${shape.render()}

${shape.generateText()}

</svg>`
}

module.exports = generateLogo;