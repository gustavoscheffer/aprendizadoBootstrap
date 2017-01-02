$('#menus-site').on('show.bs.collapse', function() {
    $('.topcasafina-banner').css('transform', 'translate(-40%, 10%)');
});
$('#menus-site').on('hide.bs.collapse', function() {
    $('.topcasafina-banner').css('transform', 'translate(-40%, -50%)');
});