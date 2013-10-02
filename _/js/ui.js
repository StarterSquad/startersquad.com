(function ($) {

    'use strict';

    window.app = {

        debug: false,

        log: function () {
            if (app.debug) {
               console.log.apply(console, Array.prototype.slice.call(arguments, 0));
            }
        },

        module: function (module) {
            if (typeof module.init === 'function') {
                $(module.init);
            }
            return module;
        }
    };

    app.module({
        init: function () {
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
        }
    });

    //carousel
    app.module({
       init: function() {
           var _center = {
             width: 718,
             height: 425,
             marginLeft: 0,
             marginTop: 0,
             marginRight: 0
           };
           var _left = {
             width: 300,
             height: 200,
             marginLeft: 0,
             marginTop: 150,
             marginRight: -150
           };
           var _right = {
             width: 300,
             height: 200,
             marginLeft: -150,
             marginTop: 150,
             marginRight: 0
           };
           var _outLeft = {
             width: 150,
             height: 100,
             marginLeft: 150,
             marginTop: 200,
             marginRight: -200
           };
           var _outRight = {
             width: 150,
             height: 100,
             marginLeft: -200,
             marginTop: 200,
             marginRight: 50
           };
         var carousel = $('#carousel');
         carousel.carouFredSel({
             width: 1018,
             height: 425,
             align: false,
             items: {
               visible: 3,
               width: 100
             },
             scroll: {
               items: 1,
               duration: 1000,
               onBefore: function( data ) {
                 data.items.old.eq( 0 ).animate(_outLeft);
                 data.items.visible.eq( 0 ).animate(_left);
                 data.items.visible.eq( 1 ).animate(_center);
                 data.items.visible.eq( 2 ).animate(_right).css({ zIndex: 1 });
                 data.items.visible.eq( 2 ).next().css(_outRight).css({ zIndex: 0 });

                 setTimeout(function() {
                   data.items.old.eq( 0 ).css({ zIndex: 1 });
                   data.items.visible.eq( 0 ).css({ zIndex: 2 });
                   data.items.visible.eq( 1 ).css({ zIndex: 3 });
                   data.items.visible.eq( 2 ).css({ zIndex: 2 });
                 }, 200);
               }
             }
           });
           var children = carousel.children();
           children.eq(0).css(_left).css({ zIndex: 2 });
           children.eq(1).css(_center).css({ zIndex: 3 });
           children.eq(2).css(_right).css({ zIndex: 2 });
           children.eq(3).css(_outRight).css({ zIndex: 1 });
       }
    });

    app.module({
        init: function () {
            var form = $('#contactForm');
            if (form.size() === 0) return;

            var fields = form.children('[name]');
            var submit = form.children(':submit');
            var rotator = submit.children('.asset-rotator');
            var submitMessage = form.next('.hidden');

            form.on('bureaucrat:complete bureaucrat:invalid', function (event) {
                submit.prop('disabled', event.type === 'bureaucrat:invalid');
            });

            form.on('bureaucrat:valid bureaucrat:invalid', '[type=email]', function (event) {
                $(this).toggleClass('invalid', event.type === 'bureaucrat:invalid');
            });

            form.on('bureaucrat:change', function () {
                form.bureaucrat('validate');
            });

            form.on('submit', function () {
                var serializedForm = form.serialize();
                fields.add(submit).prop('disabled', true);
                rotator.removeClass('hidden');

                $.ajax({
                    data: serializedForm,
                    type: form.attr('method'),
                    url:  form.attr('action'),
                    success: function () {
                        form.remove();
                        submitMessage.removeClass('hidden');
                        _gaq.push(['_trackEvent', 'Contacts', 'Submitted', serializedForm.email]);
                    }
                });

                return false;
            });

            form.bureaucrat();
            form.bureaucrat('validate');
        }
    });

}(jQuery));