class Slider {
  constructor(elements) {
    elements.forEach(function(el) {

      const cacheEl = {
        itemContainer: el.querySelector('[data-slider-items]')
      };

      let currentItem = 0;
      const items = Array.from(cacheEl.itemContainer.children);

      cacheEl.itemContainer.style.width = `${items.length * 100}%`;

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
  }
}

export default Slider;
