'use strict';

(function() {
  const sections = document.querySelectorAll('.section');
  const navList = document.querySelector('#nav-list');
  const pointer = document.querySelector('.pointer');
  const btnTop = document.querySelector('#btn-top');

  /* Page resize height */
  [].forEach.call(sections, s => {
    s.style.height = window.innerHeight + 'px';
    s.style.minHeight = 650 + 'px';
  });

  /* Active link pointer */
  function getScroll() {
    [].forEach.call(sections, el => {
      let top = el.offsetTop - 300;
      let bottom = top + el.clientHeight;
      let scroll = window.pageYOffset;
      let id = el.getAttribute('id');

      btnTop.textContent = scroll < 300 ? 'Scroll' : 'Up';

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

  window.addEventListener('scroll', getScroll);
  getScroll();

  /* Anchor link */
  const linkNav = document.querySelectorAll('[href^="#nav"]');
  const v = 0.3;
  let t;
  let start;

  [].forEach.call(linkNav, link => {
    link.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        let w = window.pageYOffset;
        let hash = this.href.replace(/[^#]*(.*)/, '$1');
        (t = document.querySelector(hash).getBoundingClientRect()
          .top), (start = null);
        requestAnimationFrame(step);
        function step(time) {
          if (start === null) {
            start = time;
          }
          let progress = time - start;
          let r = t < 0
            ? Math.max(w - progress / v, w + t)
            : Math.min(w + progress / v, w + t);
          window.scrollTo(0, r);
          if (r != w + t) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      },
      false
    );
  });

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

// JQuery
// $(document).ready(function() {
//   $('#nav-list').on('click', 'a', function(event) {
//     event.preventDefault();
//     var id = $(this).attr('href');
//     var top = $(id).offset().top;
//     $('body, html').animate({ scrollTop: top }, 555);
//   });
// });
//
// navList.addEventListener('click', e => {
//   e.preventDefault();
//   sections.forEach(el => {
//     let id = el.getAttribute('id');
//     if (e.target.getAttribute('href') == `#${id}`) {
//       window.scrollTo(0, el.offsetTop - 100);
//     }
//   });
// });
