/* eslint-disable no-unused-expressions */
const btn = document.querySelector('.window__btn');
const main = document.querySelector('.window');

let outline = false;
let windowMini = false;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (outline === false) {
    btn.classList.add('window__btn--focus');
  }
  outline = true;
  main.classList.toggle('window--mini');
  windowMini === false ? windowMini = true : windowMini = false;
});

btn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  if (windowMini === false) {
    btn.classList.remove('window__btn--focus');
    outline = false;
  }
});
