;(function($) {

    $.fn.pdfjsWrapper = function() {
        return this.each(function() {
            $('<canvas>').appendTo(this);
        });
    };

}(jQuery)); 