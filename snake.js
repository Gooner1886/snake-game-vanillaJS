import { getInputDirection } from "./input.js";

export let SNAKE_SPEED = 4;
export const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
let instructionText = document.getElementById("instructions");

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
  if (SNAKE_SPEED < 15) {
    SNAKE_SPEED += 0.5;
  }

  instructionText.innerHTML = instructionText.innerHTML.replace(
    `${snakeBody.length - 1}`,
    `${snakeBody.length}`
  );
};

export const onSnake = (foodPosition, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, foodPosition);
  });
};

export const getSnakeHead = () => {
  return snakeBody[0];
};

export const snakeIntersection = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
};

const equalPositions = (segment, foodPosition) => {
  return segment.x === foodPosition.x && segment.y === foodPosition.y;
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
};
