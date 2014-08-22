var Header = function (element, options) {
  this.options = $.extend({
    heightEnd: 44,
    logoMarginTopEnd: 0,
    logoMarginTopStart: -11,
    logoWidthEnd: 140,
    logoWidthStart: 235,
    verticalPaddingEnd: 6,
    verticalPaddingStart: 32
  }, options);
  this.$element = $(element);
  this.$logo = this.$element.find('.header_logo');
  this.$logoImg = this.$logo.children('img');
  this.heightStart = this.$element.outerHeight();
  this.heightDelta = this.heightStart - this.options.heightEnd;
  this.logoMarginTopDelta = this.options.logoMarginTopStart - this.options.logoMarginTopEnd;
  this.logoWidthDelta = this.options.logoWidthStart - this.options.logoWidthEnd;
  this.verticalPaddingDelta = this.options.verticalPaddingStart - this.options.verticalPaddingEnd;
  windowEvents.on('scroll', $.proxy(this.update, this));
  this.update();
};

$.extend(Header.prototype, {
  update: function () {
    var factor = Math.max(0, Math.min(1, window.scrollY / this.heightStart));
    var padding = this.options.verticalPaddingStart - this.verticalPaddingDelta * factor;
    this.$element.css({
      height: this.heightStart - this.heightDelta * factor,
      opacity: 1 - 0.05 * factor,
      paddingBottom: padding,
      paddingTop: padding
    });
    this.$logo.css({
      marginTop: this.options.logoMarginTopStart - this.logoMarginTopDelta * factor
    });
    this.$logoImg.css({
      width: this.options.logoWidthStart - this.logoWidthDelta * factor
    });
  }
});
