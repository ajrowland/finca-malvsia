class Gallery {
  constructor(elements) {

  // Set up gallery model.
    var cacheEl = {
      galleries: document.querySelectorAll('[data-slider]'),
      galleryContainer: document.querySelector('[data-gallery-container]'),
      gallerySelector: document.querySelector('[data-gallery-selector]'),
      galleryClose: document.querySelector('[data-gallery-close]'),
      galleryHeading: document.querySelector('[data-gallery-heading]'),
    };

    var firstGallery = true;
    var activeClass = 'is--active';

    cacheEl.galleries.forEach(function(gallery) {
      var title = gallery.querySelector('[data-slider-heading]').textContent;
      var galleryClone = gallery.querySelector('[data-slider-items]').cloneNode(true);
      galleryClone.style.transform = `translateX(0)`;

      if (firstGallery) {
        cacheEl.galleryHeading.textContent = title;
        galleryClone.classList.add(activeClass);
      }

      cacheEl.galleryContainer.appendChild(galleryClone);
      cacheEl.gallerySelector.innerHTML += `<option>${title}</option>`;
      firstGallery = false;
    });

    var galleries = cacheEl.galleryContainer.childNodes;

    // Drop down event.
    cacheEl.gallerySelector.addEventListener('change', (ev) => {
      galleries.forEach(function(gallery) {
        gallery.classList.remove(activeClass);
      });

      galleries[cacheEl.gallerySelector.selectedIndex].classList.add(activeClass);
      cacheEl.galleryHeading.textContent = cacheEl.gallerySelector[cacheEl.gallerySelector.selectedIndex].textContent;
    });

    // Close modal event.
    cacheEl.galleryClose.addEventListener('click', (ev) => {
      ev.preventDefault();

      document.body.classList.remove('is--modal-active');
    });

    //Open model event.
    elements.forEach(function(el) {

      el.addEventListener('click', (ev) => {
        ev.preventDefault();

        document.body.classList.remove('is--nav-active');
        document.body.classList.add('is--modal-active');
      });
    });
  }
}

export default Gallery;
