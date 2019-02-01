class SiteHeader {
  constructor(elements) {
    elements.forEach(function(el) {
      const cacheEl = {
        toggle: el.querySelectorAll('[data-navigation-toggle],[data-subnavigation-toggle]')
      };

      const activeClass = 'is--active';
      const navActiveClass = 'is--nav-active';

      cacheEl.toggle.forEach(function(el) {
        el.addEventListener('click', (ev) => {
          ev.preventDefault();

          if (el.getAttribute('data-navigation-toggle') !== null) {
            document.body.classList.contains(navActiveClass) ? document.body.classList.remove(navActiveClass) : document.body.classList.add(navActiveClass);
          }

          el.parentNode.classList.contains(activeClass) ? el.parentNode.classList.remove(activeClass) : el.parentNode.classList.add(activeClass);
        }, false);
      });
    });
  }
}

export default SiteHeader;
