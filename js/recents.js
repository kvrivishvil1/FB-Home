var recents = [
    {
        name: "4 event invations",
        src: "url(https://facebook.com/rsrc.php/v3/yd/r/l7nWBlnkxer.png)",
        offset: "0 -161px",
    },
    {
        name: "Giorgi Beradze and 4 others",
        src: "url(https://facebook.com/rsrc.php/v3/yi/r/-pGGS6keXfV.png)",
        offset: "-362px -49px",
    },
];

var a = document.querySelector('.recents');
var b = a.querySelector('.list-item');

recents.forEach(function (element, idx) {
    var clone = b.cloneNode(true);
    if (idx == 0) clone = b;
    clone.querySelector('.icon-16px').style.backgroundImage = element.src;
    clone.querySelector('.icon-16px').style.backgroundPosition = element.offset;
    clone.querySelector('.recent-text').innerHTML = element.name;
    a.appendChild(clone);
});