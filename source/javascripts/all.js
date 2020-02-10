//= require ./all_nosearch
//= require ./app/_search

$(window).load(function() {
    setTimeout(function () {
        $("#loader-wrapper").hide();
    }, 200);
});

$(document).ready(function() {
    $('.integrated').on('click', function(e) {
        $(".integration-opt").find(".integrated").removeClass("active");
        $(this).addClass("active");
        var dataTarget = $(this).attr('data-target');
        var TargetHidden = $('.tabsec').children('div').attr('title');
        if (TargetHidden == 'tab') {
            $('.tabsec').children('div').hide();
        }
        $('.tabsec #'+dataTarget).show();
    });
});