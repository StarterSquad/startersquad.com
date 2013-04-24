/*!
 * jQuery Bureaucrat Plugin
 * Written by Vadim Borodean, 2012-2013
 */

(function ($) {

    'use strict';

    var methods = {

        init: function (options) {
            var settings = $.extend($.bureaucrat.defaultOptions, options);
            var validationSelector = '[data-' + settings.validationDataAttr + ']';
            return this.each(function () {
                var form = $(this);
                // @todo: recover novalidate attr at destroy
                form.attr('novalidate', 'novalidate');
                form.data('bureaucrat', {
                    validationFields: $.map(form.find(validationSelector), function (DOMElement) {
                        var field = $(DOMElement);
                        return {
                            element: field,
                            validations: field.data(settings.validationDataAttr).split(/\s+/)
                        };
                    })
                });
                form.on('change.bureaucrat input.bureaucrat keydown.bureaucrat cut.bureaucrat paste.bureaucrat', 'textarea, :textbox', function (event) {
                    var target = $(event.target);
                    if (event.type === 'keydown') {
                        var initValue = target.val();
                        window.setTimeout(function () {
                            if (target.val() !== initValue) {
                                target.trigger(settings.changeEvent);
                            }
                        }, 0);
                    } else {
                        target.trigger(settings.changeEvent);
                    }
                });
            });
        },

        destroy: function () {
            return this.each(function () {
                // @todo: recover novalidate attr at destroy
                $(this).off('.bureaucrat');
            });
        },

        validate: function () {
            return this.each(function () {
                var form = $(this);
                var triggerComplete = true;
                $.each(form.data('bureaucrat').validationFields, function () {
                    var field = $(this.element);
                    if (field.is(':disabled')) return true;
                    var triggerValid = true;
                    $.each(this.validations, function () {
                        if (!$.bureaucrat.validations[this].call(null, field, form)) {
                            triggerValid = false;
                        }
                    });
                    field.trigger(triggerValid ? 'bureaucrat:valid' : 'bureaucrat:invalid');
                    triggerComplete = triggerValid ? triggerComplete : false;
                });
                if (triggerComplete) {
                    form.trigger('bureaucrat:complete');
                }
            });
        }
    };

    $.bureaucrat = {
        defaultOptions: {
            changeEvent: 'bureaucrat:change',
            validationDataAttr: 'validate'
        },
        validations: {
            email: function (field) {
                return (/^\S+@\S+$/).test(field.val());
            },
            required: function (field) {
                return !!field.val();
            }
        }
    };

    $.extend($.expr.pseudos, {
        textbox: function (element) {
            var nodeName = element.nodeName.toLowerCase();
            return (
                nodeName === 'input' &&
                $.inArray(element.type, [
                        'text', 'password', 'color', 'date', 'datetime', 'datetime-local',
                        'email', 'month', 'number', 'search', 'tel', 'time', 'url', 'week'
                    ]) !== -1
            );
        }
    });

    $.fn.bureaucrat = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        $.error('Method ' +  method + ' does not exist on jQuery.bureaucrat');
    };

}(jQuery));