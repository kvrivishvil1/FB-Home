var shortcuts = [
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    },
    {
        name: "Pit Bull Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    }
];

var a = document.querySelector('.shortcuts');
var b = a.querySelector('.list-item');


shortcuts.forEach(function (element, idx) {
    var clone = b.cloneNode(true);
    if (idx == 0) clone = b
    clone.querySelector('.navigation-bar-text').innerHTML = element.name;
    clone.querySelector('.navigation-pages-icon').style.backgroundImage = element.src;
    clone.querySelector('.navigation-pages-icon').style.backgroundPosition = element.offset;
    a.appendChild(clone);
});