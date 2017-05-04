'use strict';

const skillsBox = document.querySelector('#skills-box');
const skills = document.querySelectorAll('#skills-box .skill');

const navList = document.querySelector('#nav-list');

navList.addEventListener('click', e => {
  e.preventDefault();
});
console.log(navList);
