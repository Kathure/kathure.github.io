$(document).foundation()
$('.nav-button').on('click', function () {
    $('nav').toggleClass('nav-closed');
});
$(".toggle-icon").click(function () {
    $('.nav-button').toggleClass("pushed");
});
