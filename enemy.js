import configs from './configs.json' assert { type: 'json' };

const enemy = () => {
  const enemyHeigth = configs.playersHeigth;
  const enemyWidth = configs.playersWidth;
  const enemySpeed = 0.07;
  const enemyY = 0;
  let enemyX = configs.WIDTH / 2 - enemyWidth / 2;
  
  const tick = (ball) => {
    enemyX += (ball.x() - enemyX - (enemyWidth / 2)) * enemySpeed;
    if (enemyX + enemyWidth >= configs.WIDTH) enemyX = configs.WIDTH - enemyWidth;
    if (enemyX <= 0) enemyX = 0;
  };
  
  const render = (ctx) => {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeigth);
  };

  return {
    tick,
    render,
    x: () => enemyX,
    y: () => enemyY,
    width: () => enemyWidth,
    heigth: () => enemyHeigth,
  };
};



export default enemy;
