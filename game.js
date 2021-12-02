let lastRenderTime = 0;
import { SNAKE_SPEED } from "./snake";
import { update as updateSnake } from "./snake";
import { draw as drawSnake } from "./snake";

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  
  lastRenderTime = currentTime;

  update(); // updates all logic for game
  draw(); // draws the updated logic to the screen
};

window.requestAnimationFrame(main);

const update = () => {
    updateSnake()
};

const draw = () => {
    drawSnake()
};
