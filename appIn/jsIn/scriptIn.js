'use strict';

const sections = document.querySelectorAll('.section');
const navList = document.querySelector('#nav-list');

function getActiveLink() {
  sections.forEach((el, i) => {
    let top = el.offsetTop - 300;
    let bottom = top + el.clientHeight;
    let scroll = window.pageYOffset;
    let id = el.getAttribute('id');
    if (scroll > top && scroll < bottom) {
      for (let item of navList.children) {
        item.classList.remove('active');
        if (item.firstChild.getAttribute('href') == `#${id}`) {
          item.classList.add('active');
        }
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  getActiveLink();
});
window.addEventListener('scroll', e => {
  sections.forEach((el, i) => {
    let top = el.offsetTop - 300;
    let bottom = top + el.clientHeight;
    let scroll = window.pageYOffset;
    let id = el.getAttribute('id');
    if (scroll > top && scroll < bottom) {
      for (let item of navList.children) {
        item.classList.remove('active');
        if (item.firstChild.getAttribute('href') == `#${id}`) {
          item.classList.add('active');
        }
      }
    }
    navList.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.getAttribute('href') == `#${id}`) {
        window.scrollTo(0, el.offsetTop - 150);
      }
    });
  });
});
