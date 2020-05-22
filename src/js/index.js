'use strict';

const app = document.querySelector('#app');
const stage1 = new Stage(1020, 510);
stage1.mount(app);
const stage = document.querySelector('.stage');
const pacman1 = new Pacman(190, 190, 85);
pacman1.mount(stage);

const apple1 = new Entity(3, 5, 'apple');
apple1.mount(stage);
