import { Calendar } from 'fullcalendar';

(function (window, document) {
  'use strict';

  var Bwx = window.Bwx || {};
  var FullCalendar = Calendar || (window.FullCalendar && window.FullCalendar.Calendar);

  Bwx.Calendar = Bwx.Calendar || {};

  Bwx.Calendar.init = function (selector, options) {
    var element = typeof selector === 'string' ? document.querySelector(selector) : selector;

    if (!element || typeof FullCalendar !== 'function') {
      return null;
    }

    var calendar = new FullCalendar(element, options || {});
    calendar.render();
    return calendar;
  };

  window.Bwx = Bwx;
})(window, document);
