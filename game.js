import configs from './configs.json' assert { type: 'json' };
import playerFactory from './player.js';
import enemyFactory from './enemy.js';
import ballFactory from './ball.js';
import ui from './ui.js';

const playerPointsSpan = document.querySelector('.player-points > span');
const enemyPointsSpan = document.querySelector('.enemy-points > span');
const canvas = document.querySelector('#canvas');
canvas.height = configs.HEIGTH;
canvas.width = configs.WIDTH;

const gameInformations = {
  playerPoints: 0,
  enemyPoints: 0,
  gameOn: 'paused',
};

const ctx = canvas.getContext('2d');

let entities = {
  player: playerFactory(),
  enemy: enemyFactory(),
  ball: ballFactory(),
}

const winOrLose = (type) => {
  if (type === 'win') {
    gameInformations.playerPoints = gameInformations.playerPoints + 1;
    playerPointsSpan.textContent = gameInformations.playerPoints;
  } else if (type === 'lose') {
    gameInformations.enemyPoints = gameInformations.enemyPoints + 1;
    enemyPointsSpan.textContent = gameInformations.enemyPoints;
  }

  gameInformations.gameOn = 'paused';

  entities = {
    player: playerFactory(),
    enemy: enemyFactory(),
    ball: ballFactory(),
  };
};

const eraseRender = () => {
  ctx.clearRect(0, 0, configs.WIDTH, configs.HEIGTH);
};

const tick = () => {
  if (gameInformations.gameOn !== 'paused') {
    entities.player.tick();
    entities.enemy.tick(entities.ball);
    entities.ball.tick(entities.player, entities.enemy, winOrLose);
  } else {
    ui.tick(() => gameInformations.gameOn = 'resumed');
  }
};

const render = () => {
  eraseRender();
  if (gameInformations.gameOn === 'paused') ui.render(ctx);
  entities.player.render(ctx);
  entities.enemy.render(ctx);
  entities.ball.render(ctx);
};

export default {
  tick,
  render,
};
