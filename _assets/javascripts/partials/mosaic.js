var Mosaic = function (element, options) {
  this.options = $.extend({
    patterns: [
      [2, 2],
      [4]
    ]
  }, options);
  this.$element = $(element);
  this.$groups = this.populateGroups();
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

        $group = $('<div class="mosaic_group"></div>');

        $.each(pattern, function (j, size) {
          var $item = $(items.shift());
          $item.addClass('__' + size);
          $item.appendTo($group);
        });

        $groups = $groups.add($group);
      }

      if (++i > max) i = 0;
    }

    var $inner = $('<div class="mosaic_inner"></div>');
    $inner.append($groups);

    this.$element.append($inner);
    return $groups;
  }
});
