var Masthead = function (element, options) {
  this.options = $.extend({
    height: 0.75
  }, options);
  this.$element = $(element);
  this.$inner = this.$element.children('.masthead_inner');
  windowEvents.on('resize', $.proxy(this.resize, this));
  windowEvents.on('scroll', $.proxy(this.scroll, this));
  this.resize();
};

$.extend(Masthead.prototype, {
  resize: function () {
    var height = this.options.height * $window.height();
    this.$element.height(height);
    var innerHeight = this.$inner.height();
    if (innerHeight > height) {
      this.$element.height(innerHeight);
    }
  },
  scroll: function () {
    var height = this.$inner.height();
    var scrollTop = $window.scrollTop();
    var shift = Math.min(scrollTop, height) / 3;
    var opacity = 1 - Math.min(1, scrollTop / height);
    this.$inner.css({
      marginTop: shift,
      opacity: opacity
    });
  }
});
