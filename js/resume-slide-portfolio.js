$(document).ready(function(){
    var scrollPosition = $('#block-2').offset().top-150;
    $(window).on('scroll', function(){

        if($(window).scrollTop() > scrollPosition) {
            setTimeout(function() {
                // secondaryNav.addClass('animate-children');
                $('#resume-header').addClass('slide-in');
            }, 50);
        } else {
            setTimeout(function() {
                // secondaryNav.removeClass('animate-children');
                $('#resume-header').removeClass('slide-in');
            }, 50);
        }
    });
});
