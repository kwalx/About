'use strict';

var sections = document.querySelectorAll('.section');
var navList = document.querySelector('#nav-list');

function getActiveLink() {
  sections.forEach(function (el, i) {
    var top = el.offsetTop - 300;
    var bottom = top + el.clientHeight;
    var scroll = window.pageYOffset;
    var id = el.getAttribute('id');
    if (scroll > top && scroll < bottom) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = navList.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          item.classList.remove('active');
          if (item.firstChild.getAttribute('href') == '#' + id) {
            item.classList.add('active');
          }
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
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  getActiveLink();
});
window.addEventListener('scroll', function (e) {
  sections.forEach(function (el, i) {
    var top = el.offsetTop - 300;
    var bottom = top + el.clientHeight;
    var scroll = window.pageYOffset;
    var id = el.getAttribute('id');
    if (scroll > top && scroll < bottom) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = navList.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          item.classList.remove('active');
          if (item.firstChild.getAttribute('href') == '#' + id) {
            item.classList.add('active');
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    navList.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.getAttribute('href') == '#' + id) {
        window.scrollTo(0, el.offsetTop - 150);
      }
    });
  });
});