import configs from './configs.json' assert { type: 'json' };
import keyboardListener from './keyboardListener.js';

const player = () => {
  let playerRight = false;
  let playerLeft = false;
  const playerWidth = configs.playersWidth;
  const playerHeigth = configs.playersHeigth;
  const playerSpeed = 3;
  let playerX = configs.WIDTH / 2 - playerWidth / 2;
  const playerY = configs.HEIGTH - playerHeigth;

  keyboardListener.subscribe((key, pressed) => {
    if(key === 'ArrowRight') {
      playerRight = pressed;
    } else if (key === 'ArrowLeft') {
      playerLeft = pressed;
    }
  });

  const tick = () => {
    if (playerRight && !(playerX + playerWidth > configs.WIDTH)) playerX = playerX + playerSpeed;
    if (playerLeft && !(playerX < 0)) playerX = playerX - playerSpeed;
  };

  const render = (ctx) => {
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeigth);
  };

  return {
    tick,
    render,
    x: () => playerX,
    y: () => playerY,
    width: () => playerWidth,
    heigth: () => playerHeigth,
  };
};

export default player;
