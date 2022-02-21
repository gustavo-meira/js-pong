import degreesToRadians from './degreesToRadians.js';
import getRandomIntBetween from './getRandomDoubleBetween.js';

const maxAngle = 160;

const getNewAngle = (angle) => {
  if (angle === 'x') {
    return degreesToRadians(getRandomIntBetween(-maxAngle, maxAngle));
  } else if (angle === 'y') {
    return Math.round(Math.random()) === 0 ? -1 : 1;
  }
};

export default getNewAngle;
