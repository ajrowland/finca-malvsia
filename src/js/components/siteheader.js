class SiteHeader {
  constructor(elements) {
    elements.forEach(function(el) {
      const cacheEl = {
        toggle: el.querySelectorAll('[data-navigation-toggle]')
      };

      const navActiveClass = 'is--nav-active';

      cacheEl.toggle.forEach(function(el) {
        el.addEventListener('click', (ev) => {
          ev.preventDefault();

          document.body.classList.contains(navActiveClass) ? document.body.classList.remove(navActiveClass) : document.body.classList.add(navActiveClass);
        }, false);
      });
    });
  }
}

export default SiteHeader;
