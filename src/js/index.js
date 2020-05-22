'use strict';

console.log('it works!');

// document.addEventListener('click', () => {
//   let pacman = document.querySelector('.pacboy-active-light');
//   pacman.style.backgroundPositionX = '85px';
// });

// let pacman = document.querySelector('.pacboy-active-light');
// let xpos = window.innerWidth / 2;
// console.log(xpos);

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'ArrowRight') {
//     //pacman.style.backgroundPositionX = '85px';
//     let right = document.querySelector('.entity--pac');
//     xpos = xpos + 85;
//     right.style.left = String(xpos) + 'px';
//   } else if (event.code === 'ArrowLeft') {
//     let left = document.querySelector('.entity--pac');
//     xpos = xpos - 85;
//     left.style.left = String(xpos) + 'px';
//   }
// });
const app = document.querySelector('#app');
const pacman1 = new Pacman(window.innerWidth / 2, 85);
pacman1.mount(app);
