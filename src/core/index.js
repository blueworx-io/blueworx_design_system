import { initFlowbite } from 'flowbite';

(function (window, document) {
  'use strict';

  var Bwx = window.Bwx || {};

  Bwx.initFlowbite = function () {
    if (typeof initFlowbite === 'function') {
      initFlowbite();
      return true;
    }

    if (typeof window.initFlowbite === 'function') {
      window.initFlowbite();
      return true;
    }

    return false;
  };

  Bwx.Tables = Bwx.Tables || {};

  Bwx.Tables.init = function () {
    var tables = document.querySelectorAll('[data-bwx-table]');

    if (!tables.length) {
      return [];
    }

    if (typeof window.DataTable !== 'function' && !(window.jQuery && window.jQuery.fn && window.jQuery.fn.DataTable)) {
      return [];
    }

    return Array.prototype.map.call(tables, function (table) {
      if (table.dataset.bwxTableReady === 'true') {
        return table.bwxDataTable || null;
      }

      table.dataset.bwxTableReady = 'true';

      if (typeof window.DataTable === 'function') {
        table.bwxDataTable = new window.DataTable(table);
        return table.bwxDataTable;
      }

      table.bwxDataTable = window.jQuery(table).DataTable();
      return table.bwxDataTable;
    });
  };

  Bwx.Kanban = Bwx.Kanban || {};

  Bwx.Kanban.init = function () {
    var columns = document.querySelectorAll('[data-bwx-kanban-col]');

    if (!columns.length || !(window.jQuery && window.jQuery.fn && typeof window.jQuery.fn.sortable === 'function')) {
      return [];
    }

    return Array.prototype.map.call(columns, function (column) {
      var $column = window.jQuery(column);

      if (column.dataset.bwxKanbanReady === 'true') {
        return $column;
      }

      column.dataset.bwxKanbanReady = 'true';
      $column.sortable({
        connectWith: '[data-bwx-kanban-col]',
        items: '.bwx-kanban-card',
        placeholder: 'bwx-kanban-placeholder'
      });

      return $column;
    });
  };

  Bwx.Charts = Bwx.Charts || {};

  Bwx.Charts.init = function (id, config) {
    var element = typeof id === 'string' ? document.getElementById(id) : id;

    if (!element || typeof window.Chart !== 'function') {
      return null;
    }

    return new window.Chart(element, config || {});
  };

  Bwx.init = function () {
    Bwx.initFlowbite();
    Bwx.Tables.init();
    Bwx.Kanban.init();
  };

  window.Bwx = Bwx;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Bwx.init);
  } else {
    Bwx.init();
  }
})(window, document);
