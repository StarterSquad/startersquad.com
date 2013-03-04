/*jslint browser: true, devel: true, indent: 2 */


(function () {

  'use strict';

  window.onkeydown = function (event) {
    var anchor;
    if (event.ctrlKey) {
      if (event.keyCode === 37) {
        anchor = document.getElementById('nav-left');
      } else if (event.keyCode === 39) {
        anchor = document.getElementById('nav-right');
      } else {
        return;
      }
      if (anchor) {
        anchor.click();
      }
    }
  };

}());
