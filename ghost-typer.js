(function($){
	$.fn.ghosttyper = function(options){
    	var settings = $.extend({},$.fn.ghosttyper.defaults,options);
        var elem = $(this);
        var index = 0;
        settings.messageCount = settings.messages.length;
        typing(0, false);
        return this;

        function typing(slicer, del) {
            setTimeout(function () {
                slicer+= (del===true) ? (-1) : (1);
                elem.text(settings.messages[index].slice(0, slicer));
                if (slicer === 0) {
                    // When the whole round is completed, and sliced length displayed is reduced to 0
                    del = false; // Change the direction
                    index++; // Increment the index cyclically
                    if (index == settings.messageCount) {
                        index = 0;
                        // Checking if the repeat option is turned on
                        if(settings.repeat===false){
                            if(settings.callback) return settings.callback();
                            return;
                        }
                    }
                }
                if (slicer == settings.messages[index].length) {
                    del = true;
                    setTimeout(function () {
                        typing(slicer, del);
                    }, settings.timePause);
                } else {
                    typing(slicer, del);
                }
            }, del ? settings.timeDelete : settings.timeWrite);
        }
    };
    $.fn.ghosttyper.defaults = {
            messages: null,
            messageCount: 0,
            elem: null,
            timeWrite: 100,
            timeDelete: 50,
            timePause: 500,
            repeat: true,
            callback: undefined
    };
})(jQuery);
