var explore = [
    {
        name: "Events",
        src: "url(https://facebook.com/rsrc.php/v3/yL/r/ov0STM-pTYh.png)",
        offset: "0 -21px"
    },
    {
        name: "Groups",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "0 -1279px"
    },
    {
        name: "Pages",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "0 -1510px"
    },
    {
        name: "Friend List",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "0 -1426px"
    },
    {
        name: "Recommendations",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "-17px -2454px"
    },
    {
        name: "On This Day",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "0 -1489px"
    }
];

var c = document.querySelector('.explore');
var d = c.querySelector('.list-item');


explore.forEach(function (element, idx) {
    var clone = d.cloneNode(true);
    if (idx == 0) clone = d;
    clone.querySelector('.navigation-bar-text').innerHTML = element.name;
    clone.querySelector('.navigation-pages-icon').style.backgroundImage = element.src;
    clone.querySelector('.navigation-pages-icon').style.backgroundPosition = element.offset;
    c.appendChild(clone);

});