'use strict';

var skillsBox = document.querySelector('#skills-box');
var skills = document.querySelectorAll('#skills-box .skill');

skillsBox.addEventListener('mouseover', function (e) {
  skills.forEach(function (skill) {
    console.log(skill);
  });
  // console.log(e.clientX, e.clientY);
});

var navList = document.querySelector('#nav-list');
navList.addEventListener('click', function (e) {
  if (e.target.parentNode.classList != 'active') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = navList.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        item.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    e.target.parentNode.classList.add('active');
  }
});

var sections = document.querySelectorAll('.section');
var sc = sections.forEach(function (section) {
  return section.getBoundingClientRect(section);
});

window.addEventListener('scroll', function () {});