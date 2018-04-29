var posts = [
    {
        type: "photo",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    }, 
    {
        type: "post",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    },
    {
        type: "photo",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    }, 
    {
        type: "post",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    },
    {
        type: "photo",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    }, 
    {
        type: "post",
        autorPhoto: "url(https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74/p86x86/1001629_523498124372634_1307310183_n.jpg?_nc_cat=0&oh=7a5dcdd9264fd0d5c23525939400fb7d&oe=5B9381C9)",
        autor: "Car Memes",
        time: "43 mins",
        visibility: "url(https://facebook.com/rsrc.php/v3/yf/r/Itjx0RnmUb3.png)",
        offset: "-13px -98px",
        status: "Life goals.",
        photo: "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/31434656_1741794289209672_3979464457339273216_n.jpg?_nc_cat=0&oh=cfd8d16fda2bd6d29547fab2e0dddd8d&oe=5B5FF5DB",
        likes: "600",
        comments: "500",
        shares: "100",
    }
];

var a = document.querySelector('.post-list');
var b = a.querySelector('.post-list-item');


posts.forEach(function (element, idx) {
    var clone = b.cloneNode(true);
    if (idx == 0) clone = b;
    clone.querySelector('.poster-name').innerHTML = element.autor;
    clone.querySelector('.poster-avatar').style.backgroundImage = element.autorPhoto;
    clone.querySelector('.posted-ago').innerHTML = element.time;
    clone.querySelector('.visibility').style.backgroundImage = element.visibility;
    clone.querySelector('.visibility').style.backgroundPosition = element.offset;
    clone.querySelector('.post-status').innerHTML = element.status;
    clone.querySelector('.post-image').src = element.photo;
    clone.querySelector('.likes').innerHTML = element.likes;
    clone.querySelector('.comments').innerHTML = element.comments;
    clone.querySelector('.shares').innerHTML = element.shares;
    if(element.type == 'post')
        clone.querySelector('.post-image').style.display = "none";
    a.appendChild(clone);
});