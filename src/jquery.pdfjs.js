;(function($, window, document, undefined) {'use strict';

    var pluginName = 'pdfjs', defaults = {};

    function str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2);
        // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }

    function base64ToUint8Array(base64) {
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    $[pluginName] = function(element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        if (!!!this.settings.url && !!!this.settings.data) {
            throw 'No PDF URL or Base64 data specified.';
        }
        this._init();
    };
    $[pluginName].prototype._init = function() {
        console.log(this.pdfDocument = PDFJS.getDocumentSync(this.settings.url || base64ToUint8Array('JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwv')));
        this.canvas = $('<canvas>').appendTo(this.element.empty());
    };
    $[pluginName].prototype._renderPDF = function(pdfDocument) {
        console.log('render: ' + pdfDocument);
    };
    $[pluginName].prototype.nextPage = function() {
        console.log('next page');
    };

    $.fn[pluginName] = function(options) {
        if (!!!PDFJS) {
            throw 'Please include PDFJS.';
        }
        return this.each(function() {
            var self = $.data(this, 'plugin_' + pluginName);
            if ( typeof options === 'string') {
                if (!!!self) {
                    throw 'Plugin "' + pluginName + '" not initialized yet.';
                } else if (!$.isFunction(self[options]) || options.charAt(0) === '_') {
                    throw 'No such method "' + options + '" for plugin "' + pluginName + '".';
                }
                self[options].apply(self, Array.prototype.slice.call(arguments, 1));
            } else if (!!!self) {
                $.data(this, 'plugin_' + pluginName, new $[pluginName](this, options));
            } else {
                throw 'Plugin "' + pluginName + '" is already initialized.';
            }
        });
    };

})(jQuery, window, document);
