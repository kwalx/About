(function() {
  'use strict';
  const sections = document.querySelectorAll('.section');
  const navList = document.querySelector('#nav-list');
  const pointer = document.querySelector('.pointer');
  const btnTop = document.querySelector('#btn-top');

  /* Page resize height */
  sections.forEach(s => {
    s.style.height = window.innerHeight + 'px';
    s.style.minHeight = 650 + 'px';
  });

  /* Active link pointer */
  function getScroll() {
    sections.forEach(el => {
      let top = el.offsetTop - 300;
      let bottom = top + el.clientHeight;
      let scroll = window.pageYOffset;
      let id = el.getAttribute('id');

      btnTop.textContent = scroll < 300 ? 'Up' : 'Scroll';

      if (scroll > top && scroll < bottom) {
        for (let item of navList.children) {
          item.classList.remove('active');
          if (item.firstChild.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
            pointer.style.left = item.offsetLeft + item.offsetWidth / 2 + 'px';
            pointer.style.top =
              item.offsetTop +
              item.offsetHeight / 2 -
              pointer.offsetHeight / 2 +
              'px';
          }
        }
      }
    });
  }

  /* Anchor link */
  navList.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(el => {
      let id = el.getAttribute('id');
      if (e.target.getAttribute('href') == `#${id}`) {
        window.scrollTo(0, el.offsetTop - 100);
      }
    });
  });

  window.addEventListener('scroll', getScroll);
  getScroll();

  /* Btn to top */
  let scrolled;
  let timer;
  btnTop.addEventListener('click', () => {
    scrolled = window.pageYOffset;
    scrollToTop();
  });

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled -= 100;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
})();
