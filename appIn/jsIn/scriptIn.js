'use strict';

const skillsBox = document.querySelector('#skills-box');
const skills = document.querySelectorAll('#skills-box .skill');

skillsBox.addEventListener('mouseover', e => {
  skills.forEach(skill => {
    console.log(skill);
  });
  // console.log(e.clientX, e.clientY);
});

const navList = document.querySelector('#nav-list');
navList.addEventListener('click', e => {
  if (e.target.parentNode.classList != 'active') {
    for (let item of navList.children) {
      item.classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  }
});

const sections = document.querySelectorAll('.section');
let sc = sections.forEach(section => {
  return section.getBoundingClientRect(section);
});

window.addEventListener('scroll', () => {});
