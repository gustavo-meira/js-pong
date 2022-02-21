import game from './game.js';

const GAME_FPS = 1000 / 60;

const gameLoop = () => {
  game.tick();
  game.render();
};

setInterval(gameLoop, GAME_FPS);
