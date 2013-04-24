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
                    }
                });

                return false;
            });

            form.bureaucrat();
            form.bureaucrat('validate');
        }
    });

}(jQuery));