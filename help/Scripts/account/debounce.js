"use strict";

var debounce = function debounce(fn) {
    var frame;
    return function () {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(function () {
            fn.apply(void 0, params);
        });
    };
};

var storeScroll = function storeScroll() {
    if ($(window).scrollTop() == 0) {
        $("html").removeClass("Scrolled");
    } else {
        $("html").addClass("Scrolled");
    }

    $(".category").each(function (i, el) {
        var eTop = $(el).offset().top;
        var d = eTop - $(window).scrollTop();

        if (d < 100) {
            $(el).removeClass("ScaleBox");
        } else {
            $(el).addClass("ScaleBox");
        }
    });
};
document.addEventListener('scroll', debounce(storeScroll), {
    capture: false,
    passive: true
}); 
storeScroll();
