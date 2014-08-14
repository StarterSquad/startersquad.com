var Mosaic = function (element, options) {
  this.options = $.extend({
    patterns: [
      [2, 2],
      [4]
    ]
  }, options);
  this.$element = $(element);
  this.$groups = this.populateGroups();
  windowEvents.on('resize', $.proxy(this.update, this));
  this.update();
};

$.extend(Mosaic.prototype, {

  populateGroups: function () {

    var $group, pattern;

    var items = this.$element.children().toArray();
    var max = this.options.patterns.length - 1;

    var $groups = $();
    var i = 0;

    while (items.length) {

      pattern = this.options.patterns[i];

      if (pattern.length <= items.length) {

        $group = $('<div class="tile-group"></div>');

        $.each(pattern, function (j, size) {
          var $item = $(items.shift());
          $item.addClass('__' + size);
          $item.appendTo($group);
        });

        $groups = $groups.add($group);
      }

      if (++i > max) i = 0;
    }

    this.$element.append($groups);
    return $groups;
  },

  update: function () {
    var elementWidth = this.$element.width();
    var groupSize = elementWidth / 5;
    this.$groups.css({
      width: groupSize,
      height: groupSize
    });
  }
});
