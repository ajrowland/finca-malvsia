import SiteHeader from './components/siteheader.js';
import Slider from './components/slider.js';

// Array.forEach polyfill.
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// CustomEvent() polyfill.
if (typeof window.CustomEvent !== 'function') {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

// Initiate component functionality.
new SiteHeader(document.querySelectorAll('[data-site-header]'));
new Slider(document.querySelectorAll('[data-slider]'));

// Not used in production.
if (process.env.NODE_ENV === 'development') {
  // Grid overlay.
  document.addEventListener('keydown', function (ev) {
    if (ev.altKey  &&  ev.code === "KeyG") {
      const el = document.querySelector('html');
      const overlayClass = 'has--grid-overlay';
      el.classList.contains(overlayClass) ? el.classList.remove(overlayClass) : el.classList.add(overlayClass);
    }
  });

  // HMR.
  if (module.hot) {
    module.hot.accept();
  }
}
