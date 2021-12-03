import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 3;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
};

export const expandSnake = (RateOfExpansion) => {
  newSegments += RateOfExpansion;
};

export const onSnake = (foodPosition) => {
  return snakeBody.some((segment) => {
    return equalPositions(segment, foodPosition);
  });
};

const equalPositions = (segment, foodPosition) => {
  return segment.x === foodPosition.x && segment.y === foodPosition.y;
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0
};
