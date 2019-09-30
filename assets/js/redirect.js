// redirect.js

var songID = $.url('?song_id');
var nextURL = $.url('?next');
if (nextURL) {
    $('#next-url').append($('<a>').addClass('sub header').attr('href', nextURL).text(`Song ID：${songID}`));
    window.location.replace(nextURL);
};
