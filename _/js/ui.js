(function ($) {

  'use strict';

    // All anchors with same hrefs are :hovered simultaneously
    $('body').on('mouseenter mouseleave', 'a', function (event) {
      var sameAnchors = $('a[href="' + $(this).attr('href') + '"]');
      sameAnchors.toggleClass('hover', event.type === 'mouseenter');
    });
    // Same for the :active state
    // (disabled for now)
    // $('body').on('mousedown mouseup mouseleave', 'a', function (event) {
    //   var sameAnchors = $('a[href="' + $(this).attr('href') + '"]');
    //   sameAnchors.toggleClass('active', event.type === 'mousedown');
    // });

}(jQuery));