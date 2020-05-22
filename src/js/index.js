'use strict';

const app = document.querySelector('#app');
const stage1 = new Stage(1020, 510);
stage1.mount(app);
const stage = document.querySelector('.stage');
const pacman1 = new Pacman(400, 200, 85);
pacman1.mount(stage);

const entities = [
  new Entity(3, 5, 'wall'),
  new Entity(1, 5, 'wall'),
  new Entity(7, 5, 'wall'),
  new Entity(2, 5, 'wall'),
  new Entity(3, 5, 'wall'),
  new Entity(8, 5, 'wall'),
  new Entity(4, 5, 'wall'),
  new Entity(3, 5, 'wall'),
  new Entity(3, 5, 'wall'),
  new Entity(3, 5, 'wall'),
];

entities.forEach((entity) => {
  entity.mount(stage);
});
