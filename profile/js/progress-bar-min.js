var ProgressBar = function() {
    "use strict";

    var handleProgressBars = function() {
        $(document).ready(function() {
            $('.progress').each(function() {
                $(this).appear(function() {
                    var w = $(this).find(".progress-bar").attr("data-width");
                    var h = $(this).find(".progress-bar").attr("data-height");
                    $(this).find(".progress-bar").animate({
                        width: w + "%",
                        height: h + "%"
                    }, 100,"linear");
                });
            });
        });
    }

    return {
        init: function() {
            handleProgressBars(); 
        }
    }
}();

$(document).ready(function() {
    ProgressBar.init();
});
