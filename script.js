'use strict';

const menu = document.querySelector('#navigation');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  menu.showModal();
  toggle.setAttribute('aria-expanded', 'true');
});

document.querySelector('.menu-close').addEventListener('click', () => menu.close());
menu.addEventListener('click', (event) => {
  if (event.target === menu) {
    const bounds = menu.getBoundingClientRect();
    if (event.clientX > bounds.right || event.clientX < bounds.left) menu.close();
  }
});
menu.addEventListener('close', () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.focus();
});
