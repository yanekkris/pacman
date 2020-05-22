'use strict';

const app = document.querySelector('#app');

const pacman1 = new Pacman(window.innerWidth / 2, window.innerHeight / 2, 85);
pacman1.mount(app);

const apple1 = new Entity(3, 5, 'apple');
apple1.mount(app);
