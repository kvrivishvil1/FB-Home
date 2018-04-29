var pages = [
    {
        href: "https://www.facebook.com/%E1%83%A1%E1%83%A2%E1%83%98%E1%83%99%E1%83%94%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90%E1%83%9B%E1%83%96%E1%83%90%E1%83%93%E1%83%94%E1%83%91%E1%83%90-141161606497978/",
        src: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p200x200/22007341_141162039831268_6911257864269545687_n.png?_nc_cat=0&oh=90281aaa53b6a22e3d2ebdcc3e3aa2fa&oe=5B930A7D)",
    },
    {
        href: "https://www.facebook.com/shopstiko/",
        src: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p200x200/15976985_1034681773343897_6484270793219973790_n.png?_nc_cat=0&oh=7bf44cef0686a3eddf3a6c25b92be8da&oe=5B5D9947)",
    },
    {
        href: "https://www.facebook.com/www.ateliepirveli.ge/",
        src: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p200x200/26814697_367785636965313_4734208924324504294_n.jpg?_nc_cat=0&oh=4941656e69da96837e4852d49149fd57&oe=5B9095CE)",
    },
];
src=""

var a = document.querySelector('.pages');
var b = a.querySelector('.pages-link');

pages.forEach(function (element, idx) {
    var clone = b.cloneNode(true);
    if (idx == 0) clone = b;
    if(idx != 0) clone.querySelector('.pages-item').style.marginLeft = "5px";
    clone.href = element.href;
    clone.querySelector('.pages-item').style.backgroundImage = element.src;
    a.appendChild(clone);
});