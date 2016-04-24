require('bootstrap');

$(document).ready(function() {
    $(window).scroll(function() {
        var x = $(this).scrollTop();
        $('.jumbotron').css('background-position', '0% ' + parseInt(-x / 5) + 'px');
        $('.richard-macarthy').css('background-position', '0% ' + parseInt(-x / 5) + 'px');
        $('footer').css('background-position', '0% ' + parseInt(-x / 5) + 'px');
    });
});
