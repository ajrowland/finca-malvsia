class Tabs {
  constructor(elContainer) {
    const cacheEl = {
      tab: elContainer.querySelectorAll('[data-tab]'),
      tabContainer: elContainer.querySelector('[data-tab-container]'),
      panelContainer: elContainer.querySelector('[data-panel-container]'),
      indicator: elContainer.querySelector('[data-indicator]')
    };

    let activeTab = 1;
    const activeItemClass = 'is--active';
    const tabbedEvent = new CustomEvent('tabbed');

    cacheEl.panelContainer.style.width = `${cacheEl.panelContainer.children.length * 100}%`;

    cacheEl.tab.forEach(function(el) {

      if (el.parentNode.classList.contains(activeItemClass)) {
        cacheEl.indicator.style.width = `${el.parentNode.offsetWidth}px`;
        cacheEl.indicator.style.left = `${(el.parentNode.getBoundingClientRect().left - elContainer.getBoundingClientRect().left) + cacheEl.tabContainer.scrollLeft}px`;
      }

      el.addEventListener('click', (ev) => {
        ev.preventDefault();

        cacheEl.tab.forEach(function(el) {
          el.parentNode.classList.remove(activeItemClass);
        });

        el.parentNode.classList.add(activeItemClass);

        cacheEl.indicator.style.width = `${el.parentNode.offsetWidth}px`;
        cacheEl.indicator.style.left = `${(el.parentNode.getBoundingClientRect().left - elContainer.getBoundingClientRect().left) + cacheEl.tabContainer.scrollLeft}px`;

        activeTab = el.getAttribute('data-tab');

        cacheEl.panelContainer.style.transform = `translateX(${-(100 / cacheEl.tab.length) * (activeTab - 1)}%)`;

        // Raise tabbed event.
        elContainer.dispatchEvent(tabbedEvent);

      }, false);
    });
  }
}

export default Tabs;
