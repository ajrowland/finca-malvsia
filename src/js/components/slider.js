class Slider {
  constructor(elements) {
    window.addEventListener('load', () => {
      elements.forEach(function(el) {

        const cacheEl = {
          itemContainer: el.querySelector('[data-slider-items]')
        };

        let containerWidth = 0;
        let currentItem = 0;
        const items = Array.from(cacheEl.itemContainer.children);

        items.forEach(function(item) {
          containerWidth += item.offsetWidth;
        });

        cacheEl.itemContainer.style.width = `${containerWidth}px`;

        el.addEventListener('click', (ev) => {
          currentItem += (ev.clientX - ev.target.getBoundingClientRect().left) > el.offsetWidth / 2 ? 1 : -1;

          if (currentItem < 0) {
            currentItem = items.length - 1;
          } else if (currentItem > items.length -1) {
            currentItem = 0;
          }

          cacheEl.itemContainer.style.transform = `translateX(-${items[currentItem].offsetLeft}px)`;
        }, false);
      });
    });
  }
}

export default Slider;
