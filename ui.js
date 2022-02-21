import configs from './configs.json' assert { type: 'json' };
import keyboardListener from './keyboardListener.js';

const pausedGameText = 'Jogo Pausado';
const pressSpaceText = 'Pressione espaço para começar';
let spacePressed = false;

keyboardListener.subscribe((key, pressed) => {
  if (key === ' ') spacePressed = pressed;
});

const tick = (startGameFn) => {
  if (spacePressed) {
    startGameFn();
    spacePressed = false;
  }
};

const render = (ctx) => {
  ctx.font = '22px sans-serif';
  ctx.fillStyle = '#FFF';
  const textOffset = ctx.measureText(pausedGameText).width / 2;
  ctx.fillText(pausedGameText, configs.WIDTH / 2 - textOffset, configs.HEIGTH / 2 - 40);
  ctx.font = '12px sans-serif';
  const textOffsetSpace = ctx.measureText(pressSpaceText).width / 2;
  ctx.fillText(pressSpaceText, configs.WIDTH / 2 - textOffsetSpace, configs.HEIGTH / 2 - 18);
};

export default {
  tick,
  render,
};
