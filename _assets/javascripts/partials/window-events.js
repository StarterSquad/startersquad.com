var windowEvents = (function () {

  var callbacks = {};

  var createThrottledHandler = function (element, event) {
    callbacks[event] = $.Callbacks();
    $(element).on(event, throttle(callbacks[event].fire, 0));
  };

  var throttle = function (fn, delay)  {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  $(function () {
    createThrottledHandler($window, 'resize');
    createThrottledHandler($window, 'scroll');
  });

  return {

    off: function (event, handler) {
      if (handler) {
        callbacks[event].remove(handler);
      } else {
        callbacks[event].empty();
      }
    },

    on: function (event, handler) {
      callbacks[event].add(handler);
    },

    trigger: function (event) {
      callbacks[event].fire();
    }
  };
})();
