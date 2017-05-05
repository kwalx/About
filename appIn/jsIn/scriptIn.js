'use strict';

const skillsBox = document.querySelector('#skills-box');
const skills = document.querySelectorAll('#skills-box .skill');

const navList = document.querySelector('#nav-list');

navList.addEventListener('click', e => {
  if (e.target.parentNode.classList != 'active') {
    for (let item of navList.children) {
      item.classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  }
});
