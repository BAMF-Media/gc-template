$(document).ready(function () {
    // Фикмированная шапка при скролле
    var topSectionH = $('.topSectionCityFluid').css('height');


    var newTopSectionH = topSectionH.substring(0, topSectionH.length - 2);
    $(window).scroll(function () {
        if ($(this).scrollTop() > newTopSectionH) {
            $("#header").addClass("bgGrey").fadeIn('fast');
        } else {
            $("#header").removeClass("bgGrey").fadeIn('fast');
        }
        ;
    });
});
