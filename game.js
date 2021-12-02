let lastRenderTime = 0
const SNAKE_SPEED  = 2;

const main = (currentTime) => {
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;


    console.log('Render');
    lastRenderTime = currentTime;

    update() // updates all logic for game
    draw() // draws the updated logic to the screen
}

window.requestAnimationFrame(main);

const update = () => {
    
}

const draw = () => {

}