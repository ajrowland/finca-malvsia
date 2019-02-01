import Tabs from './tabs.js';
class ProfileList {
  constructor(elements) {
    elements.forEach(function(elContainer) {

      const cacheEl = {
        profileItem: elContainer.querySelectorAll('[data-profile-item]')
      };

      const activeItemClass = 'is--active';
      const activeWithinClass = 'is--active-within';

      const methods = {
        resetItems: function() {
          cacheEl.profileItem.forEach(function(el) {
            el.classList.remove(activeItemClass);
            el.style.marginBottom = 0;
          });

          elContainer.classList.remove(activeWithinClass);
        }
      };

      // Activate tabs for this component.
      new Tabs(elContainer);

      // Activate item upon click, and rade out the rest.
      cacheEl.profileItem.forEach(function(el) {
        let elDesc = el.querySelector('[data-profile-details]');
        el.addEventListener('click', (ev) => {
          if (elDesc.contains(ev.target)) {
             return;
          }

          ev.preventDefault();

          elContainer.classList.add(activeWithinClass);

          if (el.classList.contains(activeItemClass)) {
            methods.resetItems();
          } else {
            cacheEl.profileItem.forEach(function(el) {
              el.classList.remove(activeItemClass);
              el.style.marginBottom = 0;
            });

            el.classList.add(activeItemClass);
            el.style.marginBottom = `${elDesc.offsetHeight + 100}px`;
          }

        }, false);
      });

      // Reset all items upon a tab event.
      elContainer.addEventListener('tabbed', () => {
        methods.resetItems();
      });

      // Reset all items when clicking outside item.
      document.addEventListener('click', (ev) => {
        if (!elContainer.contains(ev.target)) {
           methods.resetItems();
        }
      });
    });
  }
}

export default ProfileList;
