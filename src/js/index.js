'use strict';

const app = document.querySelector('#app');
const stage1 = new Stage(stageWidth, stageHeight);
stage1.mount(app);

const stage = document.querySelector('.stage');
const pacman1 = new Pacman(400, 200, 85);
pacman1.mount(stage);

const entities = [
  new Entity(2, 2, 'wall'),
  new Entity(3, 2, 'wall'),
  new Entity(4, 2, 'wall'),
  new Entity(5, 2, 'wall'),
  new Entity(5, 1, 'wall'),
  new Entity(2, 4, 'wall'),
  new Entity(4, 4, 'wall'),
  new Entity(5, 4, 'wall'),
  new Entity(7, 1, 'wall'),
  new Entity(7, 3, 'wall'),
  new Entity(8, 3, 'wall'),
  new Entity(8, 4, 'wall'),
  new Entity(9, 3, 'robot'),
  new Entity(9, 2, 'wall'),
  new Entity(8, 6, 'wall'),
  new Entity(10, 5, 'wall'),
  new Entity(11, 5, 'wall'),
  new Entity(11, 6, 'wall'),
  new Entity(11, 1, 'wall'),
  new Entity(11, 2, 'wall'),
  new Entity(11, 3, 'wall'),
  new Entity(1, 5, 'wall'),
  new Entity(7, 5, 'wall'),
  new Entity(2, 5, 'wall'),
  new Entity(3, 5, 'wall'),
  new Entity(8, 5, 'wall'),
  new Entity(4, 5, 'wall'),
  new Entity(3, 5, 'wall'),

  
  new Entity(4, 1, 'apple'),
  new Entity(3, 4, 'apple'),
  new Entity(1, 6, 'apple'),
  new Entity(2, 6, 'apple'),
  new Entity(5, 5, 'apple'),
  new Entity(7, 6, 'apple'),
  new Entity(7, 4, 'apple'),
  new Entity(8, 2, 'apple'),

  new Entity(12, 1, 'apple'),
  new Entity(12, 2, 'apple'),
  new Entity(10, 6, 'apple'),
  new Entity(12, 6, 'apple'),
  new Entity(1, 1, 'apple'),

  new Entity(1, 4, 'bomb'),
  new Entity(6, 6, 'bomb'),

  new Entity(6, 1, 'tomb'),

];

entities.forEach((entity) => {
  entity.mount(stage);
});
