function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i<sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};

var app = GetURLParameter('app').replace(/\//g, '');
if (window.location.search.indexOf('app=' + app) > -1) {
    var script = document.createElement('script');
    script.src = app + '-bundled.js';
    $('body').append(script);
}