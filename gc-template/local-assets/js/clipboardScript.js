var clipboard = new Clipboard('.shareLinkBtn');

clipboard.on('success', function(e) {
    $('.copied').show();
    $('.copied').fadeOut(1000);
});
