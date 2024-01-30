// apskritimas
const calculateCircleArea = (radius) => {
  return Math.PI * radius * radius;
};

// kvadratas
const calculateSquareArea = (side) => {
  return side * side;
};

// staciakampis
const calculateRectangleArea = (length, width) => {
  return length * width;
};

// Palyginimas
const compareAreas = (circleArea, squareArea, rectangleArea) => {
  let largestArea = circleArea;
  let largestFigure = "Circle";

  if (squareArea > largestArea) {
    largestArea = squareArea;
    largestFigure = "Square";
  }

  if (rectangleArea > largestArea) {
    largestArea = rectangleArea;
    largestFigure = "Rectangle";
  }

  return { largestArea, largestFigure };
};

// testavimui
const radius = 5;
const side = 4;
const length = 6;
const width = 8;

const circleArea = calculateCircleArea(radius);
const squareArea = calculateSquareArea(side);
const rectangleArea = calculateRectangleArea(length, width);

const { largestArea, largestFigure } = compareAreas(circleArea, squareArea, rectangleArea);

console.log("Circle Area:", circleArea);
console.log("Square Area:", squareArea);
console.log("Rectangle Area:", rectangleArea);
console.log("Largest Figure:", largestFigure);
console.log("Largest Area:", largestArea);
