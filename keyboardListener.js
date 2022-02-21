const subscribers = [];

const subscribe = (callback) => {
  subscribers.push(callback);
}

document.addEventListener('keydown', ({ key }) => {
  subscribers.forEach((callback) => callback(key, true));
});

document.addEventListener('keyup', ({ key }) => {
  subscribers.forEach((callback) => callback(key, false));
});

export default {
  subscribe,
};
