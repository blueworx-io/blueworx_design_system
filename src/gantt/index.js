import Gantt from 'frappe-gantt';

(function (window, document) {
  'use strict';

  var Bwx = window.Bwx || {};
  var FrappeGantt = Gantt || window.Gantt;

  Bwx.Gantt = Bwx.Gantt || {};

  Bwx.Gantt.init = function (selector, tasks, options) {
    var element = typeof selector === 'string' ? document.querySelector(selector) : selector;

    if (!element || typeof FrappeGantt !== 'function') {
      return null;
    }

    return new FrappeGantt(element, tasks || [], options || {});
  };

  window.Bwx = Bwx;
})(window, document);
