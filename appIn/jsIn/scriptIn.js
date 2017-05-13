'use strict';

const skillsBox = document.querySelector('#skills-section');
const skills = document.querySelectorAll('#skills-box .skill');
//==
// let currentX = '';
// let currentY = '';
// const mConstant = 0.05;
// skillsBox.addEventListener('mousemove', e => {
//   if (currentX == '') currentX = e.pageX;
//   var xdiff = e.pageX - currentX;
//   currentX = e.pageX;
//   if (currentY == '') currentY = e.pageY;
//   var ydiff = e.pageY - currentY;
//   currentY = e.pageY;
//   skills.forEach((el, i) => {
//     var movement = (i + 1) * (xdiff + mConstant);
//     var movementy = (i + 1) * (ydiff + mConstant);
//     var newX = el.clientLeft + movement;
//     var newY = el.clientTop + movementy;
//     // console.log(newX);
//     el.style.right = newX + 'px';
//     el.style.top = newY + 'px';
//   });
// });
////
// skillsBox.addEventListener('mouseover', e => {
//   // console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
//   // console.log(xPos, yPos);
//   let x = e.clientX;
//   let y = e.clientY;
//   skills.forEach(skill => {
//     skill.style.right = x / 50 + 'px';
//     skill.style.top = y / 50 + 'px';
//   });
// });

//==
// skillsBox.addEventListener('mouseover', e => {
//   skills.forEach(skill => {
//     console.log(getComputedStyle(skill));
//   });
//   console.log(e.clientX, e.clientY);
// });

// navList.addEventListener('click', e => {
//   if ('click') {
//     console.log('e');
//   }
// });
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
// http://jsfiddle.net/bonilka/p7sgwg4L/
// https://jsfiddle.net/lovromar/JmUL8/
// https://jsfiddle.net/lovromar/JmUL8/
// const navList = document.querySelector('#nav-list');
// window.addEventListener('scroll', e => {
//   const sections = document.querySelectorAll('.section');
//   sections.forEach((el, i) => {
//     let top = el.offsetTop - 300;
//     let bottom = top + el.clientHeight;
//     let scroll = window.pageYOffset;
//     let id = el.getAttribute('id');
//     if (scroll > top && scroll < bottom) {
//       for (let item of navList.children) {
//         item.classList.remove('active');
//         if (item.firstChild.getAttribute('href') == `#${id}`) {
//           item.classList.add('active');
//         }
//       }
//     }
//     navList.addEventListener('click', e => {
//       e.preventDefault();
//       if (e.target.getAttribute('href') == `#${id}`) {
//         window.scrollTo(0, el.offsetTop - 150);
//       }
//     });
//   });
// });
