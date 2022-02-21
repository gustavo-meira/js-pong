import configs from './configs.json' assert { type: 'json' };
import getNewAngle from './utils/getNewBallAngle.js';

const ball = () => {
  const ballHeigth = 5;
  const ballWidth = 5;
  let ballY = configs.HEIGTH / 2 - ballHeigth / 2;
  let ballX = configs.WIDTH / 2 - ballWidth / 2;
  const ballSpeed = 0.9;
  let ballDx = getNewAngle('x');
  let ballDy = getNewAngle('y');
  
  const isColliding = (x, y, width, heigth) => {
    if (ballX <= x + width && ballX >= x && ballY >= y - (heigth / 2) && ballY <= y + heigth) return true;
  };
  
  const tick = (player, enemy, callbackFn) => {
    const ballNextMove = ballX + (ballDx * ballSpeed);
    if (ballNextMove + ballWidth >= configs.WIDTH) {
      ballDx *= -1;
    } else if (ballNextMove < 0) {
      ballDx *= -1;
    }
  
    if (ballY >= configs.HEIGTH) {
      // Ponto do enemy
      callbackFn('lose');
    } else if (ballY < 0) {
      // Ponto do player
      callbackFn('win');
    }
  
    const collidingWithPlayer = isColliding(player.x(), player.y(), player.width(), player.heigth());
    if (collidingWithPlayer) {
      ballDy *= -1;
      ballDx = getNewAngle('x');
    }
  
    const collidingWithEnemy = isColliding(enemy.x(), enemy.y(), enemy.width(), enemy.heigth());
    if (collidingWithEnemy) {
      ballDy *= -1;
      ballDx = getNewAngle('x');
    }
  
    ballX += ballDx * ballSpeed;
    ballY += ballDy * ballSpeed;
  };
  
  const render = (ctx) => {
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(ballX, ballY, ballWidth, ballHeigth);
  };

  return {
    tick,
    render,
    x: () => ballX,
  };
};



export default ball;