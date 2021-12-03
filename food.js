import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = randomGridPosition();
const EXPANSION_RATE = 3;

export const update = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = randomGridPosition();
  }
};

export const draw = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};

const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == NULL || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
};
