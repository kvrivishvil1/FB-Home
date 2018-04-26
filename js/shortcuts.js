var shortcuts = [
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    },
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    },
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    },
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    },
    {
        name: "///Bmw E39 Club Georgia",
        src: "url(https://facebook.com/rsrc.php/v3/yH/r/EnDFPxMkEp1.png)",
        offset: "0 -315px",
    }
];

var a = document.querySelector('.shortcuts');
var b = a.querySelector('.navigation-bar-item');
b.querySelector('.navigation-bar-text').innerHTML = shortcuts[0].name;
b.querySelector('.navigation-pages-icon').style.backgroundImage =  shortcuts[0].src;
b.querySelector('.navigation-pages-icon').style.backgroundPosition =  shortcuts[0].offset;


shortcuts.forEach(function (element, idx) {
    if (idx != 0) {
        var clone = b.cloneNode(true);
        clone.querySelector('.navigation-bar-text').innerHTML = element.name;
        clone.querySelector('.navigation-pages-icon').style.backgroundImage = element.src;
        clone.querySelector('.navigation-pages-icon').style.backgroundPosition = element.offset;
        a.appendChild(clone);
    }
});