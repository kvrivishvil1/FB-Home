var stories = [
    {
        name: "Meri Gvasalia",
        src: "url(https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.0-1/p80x80/10689950_804450402927076_2217677699671132206_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFhSyUfmpYYIfhnp4hwdtm0f_vVOwmNQT_O5YvNqwNOJLP1o_gaKIxuef0pVPK3Yx0RYSgx0puAy7B189hSAfN8QRELjGKxH2TGNw-StYqNvw&oh=e7276937bd38fd4f11ef66eebbea9f2b&oe=5B9D218D)",
        time: "A few second ago"
    },
    {
        name: "Eka Aladoshvili",
        src: "url(https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.0-1/c12.0.48.48/p48x48/30707672_1752367498176424_6993965796103815168_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGp91-BxUpwk4PJt2EiOW3wIkEMkT7_di3ThEVD1w5qe8sAAHDmGKT0KgYoriNumNfxXV7HZp_TwWUf168rb48vUiatxdaJRzy-iEHkSEoMNw&oh=24aaf3cbfb9f1e4a938e98c2dce85c2b&oe=5B57FB56)",
        time: "13 hours ago"
    },
    {
        name: "Mariam Xubulia",
        src: "url(https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.0-1/p48x48/31444580_1675258792562988_3600706126367232221_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFyu04wHSfBYZSog-0NG-3bcOvvEF23kKEuFqzPHG1WczmZwp0Y-pujZmYhpzAANAKs74JnI_5tHfIeHZRh1Ery5f1Dmq51ytfihlfKZqXnEg&oh=ae8239af3ec28ee51892c907c030818c&oe=5B55C926)",
        time: "21 hours ago"
    },
];

var a = document.querySelector('.m-day');
var b = a.querySelector('.story-list-item');

stories.forEach(function (element, idx) {
    var clone = b.cloneNode(true);
    if (idx == 0) clone = b;
    clone.querySelector('.story-avatar').style.backgroundImage = element.src;
    clone.querySelector('.story-name').innerHTML = element.name;
    clone.querySelector('.time-ago').innerHTML = element.time;
    a.appendChild(clone);
});