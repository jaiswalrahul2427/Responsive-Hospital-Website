$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    })

    $(window).on('load-scroll', function() {
        $('.fa-bars').toggleClass('fa-times');
        ('.nav').toggleClass('nav-toggle');
        if ($(window).scrollTop() > 10) {
            $('header').addClass('header-active');

        } else {
            $('header').removeClass('header-active');
        }

    });
    $('#facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

})

function clearForm() {
    // Reset the form by setting each field's value to an empty string
    document.getElementById("myForm").reset();
}