(function($) {
    'use strict';

    /**
     * handlePlaceholder
     * -----------------
     * Display placeholder over an element **if the content is generated from the template**.
     * @param $element - The element to set a placeholder on.
     */
    $.fn.setPlaceholder = function(templateClass, iconClass, callback, options) {
        var templates = $('<div/>'),
            $element = $(this);

        options = options || {};
        templateClass = templateClass || 'genericPlaceholder';

        // Load all placeholder templates from the template file to the "templates" `DIV`.
        // and do the `afterTemplatesLoaded` callback.
        $.dmLoad(templates, '/editor/ed/src/editables/ed.placeHolderTemplates.html', afterTemplatesLoaded);

        /**
         *  Callback action after loading the placeholder templates
         */
        function afterTemplatesLoaded() {
            // Choose the correct place holder for the placeholders file
            var placeholder = templates.find('.' + templateClass),
                height = $element.height(),
                minHeight = options.minHeight || 150,
                icon,
                content;

            // Set smaller placeholder if item is smaller then the limit.
            // Limit can be set using `options.minHeight`. `Defualt = 100`.
            if (height < minHeight && height !== 0) {
                placeholder.addClass('small');
            }

            // Add placeholder
            icon = placeholder.find('span.icon');
            if (icon.length > 0) {
                icon.addClass(iconClass);
            }

            // Wrap content inside element to allow opacity effect
            // and append placeholder
            if ('wrap' in options && options.wrap) {
                content = $("<div class='tempContainer'/>").html($element.html());
                $element.html('');
                placeholder.appendTo($element);
                content.appendTo($element);
            } else {
                placeholder.appendTo($element);
            }

            // Set editable placeholder `css` and `bind` action
            $element
                .css({
                    position: 'relative'
                })
                .html($element.html());
            $element
                .off('click.editPlaceholder', '.placeholder')
                .on('click.editPlaceholder', '.placeholder', function(e) {
                    // Select the editable under the placeholder
                    selectElement();
                    if (callback && typeof callback === 'function') {
                        callback(e.target);
                    }
                });

            placeholder.dmid($.dmfw.generateDMid());

            return placeholder;
        }

        // Make sure the editable is selected
        function selectElement() {
            return false;
            //            $element.selectElement();
            //            $element.lockElement();
            //            $.dmx.current.editable.inlineEditor.editorUtils.editorTop.hide();
            //            $.dmx.current.editable.inlineEditor.editorUtils.hideSelectionOverlay();
        }
    };

    /**
     * styleSelectBox
     * -----------------
     * Change defualt HTML dropdown to the styled one
     * @param callBack - Leave empty if none.
     * @param options - Accepts width and isFirstTime. Width can also be set on the parent as "width" attr. Defualt width = 200. Defualt isFirstTime = false.
     * @param data - Leave empty if data is hard coded. Data examples can found here: http://designwithpc.com/Plugins/ddSlick.
     */
    $.fn.styleSelectBox = function(callBack, options, data) {
        var ddEl,
            dropdown = $(this),
            inputData = data || [];
        options = options || {};
        options.filterInProgress = false;
        options.doneFiltering = false;
        options.isFirstTime = options.isFirstTime || false;
        options.selectText = options.selectText || '';
        options.dd = options.dd || dropdown;
        options.digitsOnly = options.digitsOnly || false;
        // Use `minimalect` plugin
        if (options.searchable) {
            dropdown.find('option:selected').attr('selected', '');
            dropdown.minimalect({
                placeholder: options.placeholder || 'Select...',
                empty: options.empty || 'N/A',
                onopen: options.onopen || function() {},
                onclose: options.onclose || function() {},
                onfilter: function(valueExists) {
                    // If `onFilter` and `addNonExisting` are passed as `true` and the current value does not exist then add it to the dropdown list

                    // Get the current input and value
                    var container = options.dd.next();

                    if (options.onfilter && !valueExists && options.addNonExisting) {
                        var wrapper = options.dd.next('.minict_wrapper'),
                            input = wrapper.children('input'),
                            val = parseInt(input.val());

                        // Activate filter flag
                        options.filterInProgress = true;

                        if (isNaN(val)) {
                            if (options.digitsOnly) input.val('');
                            val = input.val();
                        }

                        if (options.doneFiltering) {
                            container.find('input').off('blur.doneFiltering keydown.doneFiltering');
                            doneFiltering(input, val);
                        } else {
                            container.find('ul').hide();

                            // On blur
                            container
                                .find('input')
                                .off('blur.doneFiltering')
                                .on('blur.doneFiltering', function() {
                                    action(container, input, val);
                                });

                            // On keydown
                            container
                                .find('input')
                                .off('keydown.doneFiltering')
                                .on('keydown.doneFiltering', function(e) {
                                    if (e.keyCode === 13) {
                                        action(container, input, val);
                                    }
                                });
                        }
                    } else {
                        container.find('input').off('blur.doneFiltering keydown.doneFiltering');
                    }

                    function action(container, input, val) {
                        container.find('input').off('blur.doneFiltering');
                        options.doneFiltering = true;
                        doneFiltering(input, val);
                    }

                    function doneFiltering(input, val) {
                        // Create a new option with the current value
                        var prefix = options.prefix || '',
                            suffix = options.suffix || '',
                            option = $(
                                "<option value='" + prefix + val + suffix + "'>" + prefix + val + suffix + '</option>'
                            );

                        // Add the option and trigger the events to make it look like the state is preserved
                        option.appendTo(options.dd);

                        options.filterInProgress = false;
                        options.dd.val(prefix + val + suffix).change();

                        input.val(prefix + val + suffix);
                        options.doneFiltering = false;
                    }
                },
                onchange: function(value, text, el) {
                    // Don't use callback while filtering
                    if (options.filterInProgress || !value) {
                        return;
                    }

                    if (callBack && options.isFirstTime === false) {
                        callBack(value, text, el);
                    }

                    // Reset filter state
                    options.isFirstTime = false;
                    options.filterInProgress = false;
                }
            });
            if (options.width) {
                $(this)
                    .next()
                    .css({
                        width: options.width
                    });
            }
        }

        // Use `ddslick` plugin
        else {
            ddEl = dropdown.ddslick({
                scrollableParent: options.scrollableParent || null,
                selectText: options.selectText,
                data: inputData,
                width: function() {
                    return (
                        options.width ||
                        $(this)
                            .parents('[width]')
                            .eq(0)
                            .attr('width') ||
                        200
                    );
                },
                onBeforeSelected: function(selectedData) {
                    var proceed = true;
                    if ('test' in options && options.isFirstTime === false) {
                        proceed = options.test(selectedData);
                    }
                    return proceed;
                },
                onSelected: function(selectedData) {
                    if (callBack && options.isFirstTime === false) {
                        callBack(selectedData);
                    }
                    options.isFirstTime = false;
                },
                appendToBody: options.appendToBody
            });
            if (dropdown.attr('id') && options.classNames) {
                $('div#' + dropdown.attr('id')).addClass(options.classNames);
            }
            return ddEl;
        }
    };

    $.fn.modifySelectBox = function(onSelect, options, eventName) {
        var $returned = $();
        eventName = eventName || 'change';
        this.each(function(select) {
            var $options,
                $select = $(this).hide(),
                $newSelect = $('<div></div>'),
                $newEl = $('<div></div>').append($newSelect),
                data;
            if (!$select.is('select')) {
                return;
            }
            $options = $select.children();
            data = $options.map(function(i, option) {
                return {
                    text: option.innerHTML,
                    value: option.value,
                    selected: $(option).is(':selected')
                };
            });
            onSelect =
                onSelect ||
                function(data) {
                    $select.val(data.selectedData.value);
                    $select.trigger(eventName);
                };

            if ($select.attr('class')) {
                $newEl.attr('class', $select.attr('class'));
                $select.removeAttr('class');
            }
            $newEl.addClass('oneSelect');
            $select.after($newEl);
            options = options || {};
            options.isFirstTime = true;
            $newSelect = $newSelect.styleSelectBox(onSelect, options, data);
            $select.data('styledSelect', $newSelect);
            $returned.add($newEl);
        });

        return $returned;
    };

    /**
     * oneChangeTextSize
     * -----------------
     * @param size
     * @param callBack
     * @param options
     */
    $.fn.oneChangeTextSize = function(size, callBack, options) {
        options = options || {};

        var self = this;

        // if (or when) loaded, continue
        if (!size) {
            size = 16;
        }
        if (isNaN(size)) {
            if (size.toLowerCase().indexOf('px') !== -1) {
                size = size.substr(0, size.length - 2);
            }
        }
        this.find('#sliderText').slider({
            range: 'min',
            value: size,
            min: options.textMinSize || 6,
            max: options.textMaxSize || 72,
            slide: function(event, ui) {
                self.find('#designTextInput').val(ui.value + 'px');
                self.find('#textExample').css('font-size', ui.value);
            },
            stop: function(event, ui) {
                callBack(ui.value + 'px');
            }
        });
        self.find('#designTextInput').val(self.find('#sliderText').slider('value') + 'px');
        self.find('#textExample').css('font-size', self.find('#sliderText').slider('value'));
        self.find('[id^="designTextInput"]').blur(function() {
            _updateInfo();
        });
        self.find('[id^="designTextInput"]').keypress(function(e) {
            if (e.keyCode === 13) {
                _updateInfo();
            }
        });

        var _changeSize = function() {
            self.find('#designTextInput').val(self.find('#sliderText').slider('value') + 'px');
            self.find('#textExample').css('font-size', self.find('#sliderText').slider('value'));
            callBack(self.find('#sliderText').slider('value') + 'px');
        };

        var _updateInfo = function() {
            var size = parseInt(self.find('#designTextInput').val(), 10);
            if (size >= 6 && size <= 72) {
                self.find('#sliderText').slider('option', 'value', size);
            }
            _changeSize();
        };
    };

    /**
     * oneControlGroup controller
     * ----------------
     * @param options
     * @usage example
     * $el.oneFontIconControlGroup({
     *    items : [
     *         {
     *              "icon" : "dm-icon-right-to-left",
     *               "value" : 0
     *         },
     *         {
     *               "icon" : "dm-icon-left-to-right",
     *                "value" : 1
     *         },
     *     ],
     *     initValue : 0,
     *     onSelect : function(selectedItem) {...}
     * });
     * @note : Additional option is the boolean options.multipleSelection
     *         In that case the initValue is an array of selected values
     */
    $.fn.oneFontIconControlGroup = function(options) {
        var ACTIVE_CLASS = 'selected',
            CONTROL_GROUP_BUTTON_CLASS = 'controlGroupButton',
            FONT_CLASS = 'fontIcon',
            wrapperClassName = options.wrapperClassName || 'oneFontIconControlGroup',
            i,
            length = options.items.length,
            $singleButtonEl,
            $fontIconEl,
            items = $.extend(true, {}, options.items),
            selectedItem = {},
            selectedItems = [],
            $el = this;

        var getButtonSelectHandler = function(item) {
            return function(event) {
                if (item !== selectedItem) {
                    selectedItem.isSelected = false;
                    selectedItem.$buttonEl.removeClass(ACTIVE_CLASS);

                    item.isSelected = true;
                    selectedItem = item;
                    item.$buttonEl.addClass(ACTIVE_CLASS);
                    $el.trigger('oneFontIconControlGroupSelection', item);
                    return options.onSelect && options.onSelect(item);
                }
            };
        };

        var getButtonMultipleSelectClickHandler = function(item) {
            return function(event) {
                item.isSelected = !item.isSelected;
                item.$buttonEl.removeClass(ACTIVE_CLASS);
                if (item.isSelected) {
                    item.$buttonEl.addClass(ACTIVE_CLASS);
                } else {
                    item.$buttonEl.removeClass(ACTIVE_CLASS);
                }
                $el.trigger('oneFontIconControlGroupSelection', item);
                return options.onSelect && options.onSelect(item);
            };
        };

        $el.addClass(wrapperClassName);

        for (i = 0; i < length; i++) {
            $singleButtonEl = $('<div></div>');
            $singleButtonEl.addClass(CONTROL_GROUP_BUTTON_CLASS);
            $fontIconEl = $('<span></span>').appendTo($singleButtonEl);
            $fontIconEl.addClass(FONT_CLASS);
            items[i].icon && $fontIconEl.addClass(items[i].icon);

            items[i].$buttonEl = $singleButtonEl;
            items.index = i;
            if (options.multipleSelection) {
                $singleButtonEl.off('click').on('click', getButtonMultipleSelectClickHandler(items[i]));
                if ($.isArray(options.initValue) && $.inArray(items[i].value, options.initValue) !== -1) {
                    $singleButtonEl.addClass(ACTIVE_CLASS);
                }
            } else {
                $singleButtonEl.off('click').on('click', getButtonSelectHandler(items[i]));
                if (options.initValue === items[i].value) {
                    $singleButtonEl.addClass(ACTIVE_CLASS);
                    selectedItem = items[i];
                }
            }

            $el.append($singleButtonEl);
        }
    };

    /**
     * Confirmation overlay for the side panel
     *
     * @param options - options object contains : okCallback, cancelCallback, message;
     */
    $.fn.oneConfirmationOverlay = function(options) {
        var $wrapper = $('<div class="oneConfirmationOverlay"></div>'),
            $table = $('<div><div></div></div>'),
            $cell = $table.find('div'),
            $message = $('<div class="oneConfirmationOverlayMessage"></div>'),
            $buttons = $(
                '<div class="confirmButtons"><span class="dm-icon-ok"></span><span class="dm-icon-remove"></span></div>'
            ),
            $castor = $('<div class="castor"></div>').appendTo($('.PreviewPaneInnerWrapper')),
            $outer = $(document),
            outerClickHandler = function(event) {
                var $target = $(event.target);
                if (!$target.is('.oneConfirmationOverlay') && $target.closest('.oneConfirmationOverlay').length === 0) {
                    destroy();
                }
            };

        $wrapper.append($table);
        $message.html(options.message);
        $cell.append($message);
        $cell.append($buttons);
        this.append($wrapper);
        $buttons.find('.dm-icon-ok').on('click', function() {
            destroy(true);
        });
        $buttons.find('.dm-icon-remove').on('click', function() {
            destroy();
        });
        window.getComputedStyle($wrapper[0]).opacity;
        $wrapper.addClass('show').afterTransition(function() {
            $outer.on('mousedown', outerClickHandler);
        });

        function destroy(isOk) {
            if (isOk && options.okCallback) {
                options.okCallback();
            } else if (!isOk && options.cancelCallback) {
                options.cancelCallback();
            }
            $outer.off('mousedown', outerClickHandler);
            $castor.remove();
            $wrapper.removeClass('show').afterTransition(function() {
                $wrapper.remove();
            });
        }
    };

    $.extend({
        // Data - Array of objects containing path & id
        loadCSSDynamically: function(data, options) {
            var style, head, styleExist, i, curData, opts;
            head = document.getElementsByTagName('head')[0];
            opts = options || {};

            for (i = 0; i < data.length; i++) {
                curData = data[i];
                styleExist = document.getElementById(curData.id) !== null;

                if (!styleExist) {
                    style = document.createElement('link');
                    style.setAttribute('rel', 'stylesheet');
                    style.setAttribute('type', 'text/css');
                    style.setAttribute('id', curData.id);
                    style.setAttribute('href', curData.path);
                    head.appendChild(style);
                }
            }

            if (opts.callback) {
                setTimeout(opts.callback, 500);
            }
        },

        addSvgToElement: function(el, icon, opts) {
            var svg = '<svg class="icon" viewBox="0 0 32 32"><use xlink:href="#' + icon + '"></use></svg>';
            $(el).append(svg);
        }
    });
})(jQuery);
