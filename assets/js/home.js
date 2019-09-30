---
---

// home.js

$.fn.form.settings.rules.musicURL = function (value) {
    let regex = {{ site.data.api.music_url_regex }};
    return (regex.test(value));
};

$('#music-url-form').form({
    inline : true,
    on: 'blur',
    fields: {
        music_url: {
            identifier: 'music-url',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please input a music URL'
                },
                {
                    type: 'url',
                    prompt: 'Music URL must be a valid URL'
                },
                {
                    type: 'musicURL',
                    prompt: 'Music URL is not formatted correctly'
                }
            ]
        },
    }
});

// parse music URL
function parseMusicURL() {
    if ($('#music-url-form').form('is valid')) {
        let songID = $.url('?id', $('#music-url-form').form('get value', 'music-url').replace('#', ''));
        if (songID) {
            window.open(`redirect/?song_id=${songID}&next=${encodeURIComponent('{{ site.data.api.parse_url }}'.replace('{song_id}', songID))}`, '_blank');
        };
    };
};

// bind event to parse button
$('#parse').click(function (event) {
    parseMusicURL();
});


