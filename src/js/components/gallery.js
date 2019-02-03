class Gallery {
  constructor(elements) {
    window.addEventListener('load', () => {
      elements.forEach(function(el) {

        const cacheEl = {
          itemContainer: el.querySelector('[data-gallery-items]'),
          indicatorContainer: el.querySelector('[data-gallery-indicator]')
        };

        let currentItem = 0;
        const items = Array.from(cacheEl.itemContainer.children);
        const activeClass = 'is--active';

        items.forEach(function(item) {
          let indicatorItem = document.createElement('li');

          if (item.classList.contains(activeClass)) {
            indicatorItem.setAttribute('class', activeClass);
          }

          if (item.hasAttribute('alt')) {
            indicatorItem.appendChild(document.createTextNode(item.getAttribute('alt')));
          }

          cacheEl.indicatorContainer.appendChild(indicatorItem);
        });

        const indicatorItems = Array.from(cacheEl.indicatorContainer.children);

        el.addEventListener('click', (ev) => {
          currentItem += (ev.clientX - ev.target.getBoundingClientRect().left) > el.offsetWidth / 2 ? 1 : -1;

          if (currentItem < 0) {
            currentItem = items.length - 1;
          } else if (currentItem > items.length -1) {
            currentItem = 0;
          }

          items.forEach(function(item) {
            item.classList.remove(activeClass);
          });

          indicatorItems.forEach(function(item) {
            item.classList.remove(activeClass);
          });

          items[currentItem].classList.add(activeClass);
          indicatorItems[currentItem].classList.add(activeClass);
        }, false);
      });
    });
  }
}

export default Gallery;
