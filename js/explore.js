var explore = [
    {
        name: "Events",
        src: "url(https://facebook.com/rsrc.php/v3/yL/r/ov0STM-pTYh.png)",
        offset:"0 -21px"
    },
    {
        name: "Groups",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset:"0 -1279px"    
    },
    {
        name: "Pages",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset: "0 -1510px"
    },
    {
        name: "Friend List",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset:"0 -1426px"
    },
    {
        name: "Recommendations",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset:"-17px -2454px"
    },
    {
        name: "On This Day",
        src: "url(https://facebook.com/rsrc.php/v3/yF/r/CzRFvdHdJ0W.png)",
        offset:"0 -1489px"
    }
];

var c = document.querySelector('.explore');
var d = c.querySelector('.navigation-bar-item');
d.querySelector('.navigation-bar-text').innerHTML = explore[0].name;
d.querySelector('.navigation-pages-icon').style.backgroundImage = explore[0].src;
d.querySelector('.navigation-pages-icon').style.backgroundPosition = explore[0].offset;

explore.forEach(function (element, idx) {
    if (idx != 0) {
        var clone = d.cloneNode(true);
        clone.querySelector('.navigation-bar-text').innerHTML = element.name;
        clone.querySelector('.navigation-pages-icon').style.backgroundImage = element.src;
        clone.querySelector('.navigation-pages-icon').style.backgroundPosition = element.offset;
        if(idx == 4) {
            clone.querySelector('.navigation-pages-icon').style.width=16;
            clone.querySelector('.navigation-pages-icon').style.height=16;
        }
        c.appendChild(clone);
    }
});