import { SNAKE_SPEED } from "./snake.js";
import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  snakeBody,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("board");

let lastRenderTime = 0;
let gameOver = false;

const main = (currentTime) => {
  if (gameOver) {
    if (
      confirm(
        `You lost. Your score: ${snakeBody.length - 1}. Press OK to restart.`
      )
    ) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update(); // updates all logic for game
  draw(); // draws the updated logic to the screen
};

window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
  updateFood();
  checkDeath();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

const checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};
