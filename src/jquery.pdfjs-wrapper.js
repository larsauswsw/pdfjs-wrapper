;( function($) {

        $.fn.pdfjsWrapper = function(options) {

            var defaults = {
                scale : 0.8,
                l10n : {
                    next : 'next',
                    previous : 'previous'

                }
            };

            var settings = $.extend({}, defaults, options);

            var _addButton = function addButton(element, text, cssClass) {
                return $('<button>').text(text).addClass(cssClass).appendTo(element);
            };

            return this.each(function() {

                var pageNum = 1;
                var maxPages = 10;
                var url = 'http://localhost:4502/content/odh-pitchsite/homepage/pitch-details/_jcr_content/sidebar/download_box/download-entries/download_entry_1/file.res/Pitch%20Slides.pdf';
                var pdfDocument = null;
                var canvas = $('<canvas>').appendTo(this);
                var ctx = canvas.get(0).getContext('2d');

                var nextBtn = _addButton(this, settings.l10n.next, 'next');
                var previousBtn = _addButton(this, settings.l10n.previous, 'previous');

                nextBtn.click(function() {
                    console.log(pdfDocument.numPages);
                    if (pageNum < maxPages) {
                        pageNum++;
                        renderPage(pageNum);
                    }
                });

                previousBtn.click(function() {
                    if (pageNum > 1) {
                        pageNum--;
                        renderPage(pageNum);
                    }
                });

                /*var renderPage = function renderPage(number) {
                 pdfDocument.getPage(number).then(function(page) {
                 var viewport = page.getViewport(scale);
                 canvas.height = viewport.height;
                 canvas.width = viewport.width;

                 // Render PDF page into canvas context
                 var renderContext = {
                 canvasContext : ctx,
                 viewport : viewport
                 };
                 page.render(renderContext);
                 });
                 };

                 PDFJS.getDocument(url).then(function getPDFDocument(_pdfDocument) {
                 pdfDocument = _pdfDocument;
                 renderPage(pageNum);
                 });*/

            });
        };

    }(jQuery));
