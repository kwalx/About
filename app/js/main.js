'use strict';

var skillsBox = document.querySelector('#skills-box');
var skills = document.querySelectorAll('#skills-box .skill');

var navList = document.querySelector('#nav-list');

navList.addEventListener('click', function (e) {
  e.preventDefault();
});
console.log(navList);