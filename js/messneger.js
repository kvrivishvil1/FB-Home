
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var ch = document.querySelector('.contacts');
console.log(document.querySelector('.contacts'));
ch.style.height = (vh - 43 - 177 - 1) + 'px';

var friends = [
    {
        name: "Medea Aladoshvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c130.0.160.160/p160x160/970017_222954754520613_1063401737_n.jpg?_nc_cat=0&oh=2308e5bb93b4244a6d66157f80bcec33&oe=5B664C8B)",
    },
    {
        name: "Giorgi Klimiashvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/17799493_1262178057164523_4086887637727912217_n.jpg?_nc_cat=0&oh=113abeee8df823f7de668279ecbad81c&oe=5B59E5A5)",
    },
    {
        name: "Tika Dolidze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/29133298_10211341841445482_9121368444770451456_n.jpg?_nc_cat=0&oh=0e3831f52b1e5d0008b00cb7590a4d8f&oe=5B5ABEAC)",
    },
    {
        name: "Giorgi Basilaia",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/31131032_1933995953300244_4574242141763840395_n.jpg?_nc_cat=0&oh=127ff3b680d8893e0af6553feb6f4a53&oe=5B67BFB3)",
    },
    {
        name: "Niko Mdinaradze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c20.0.48.48/p48x48/14021579_1067107516660323_4837825983170079092_n.jpg?_nc_cat=0&oh=795f14412c5f7162171af30e2fd67a14&oe=5B98E93B)",
    },
    {
        name: "Nukri Kvrivishvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/30630009_1634261723295390_7376831560999325757_n.jpg?_nc_cat=0&oh=d9415071b64e43efc77afa97cd5196d9&oe=5B57C124)",
    },
    {
        name: "Medea Aladoshvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c130.0.160.160/p160x160/970017_222954754520613_1063401737_n.jpg?_nc_cat=0&oh=2308e5bb93b4244a6d66157f80bcec33&oe=5B664C8B)",
    },
    {
        name: "Giorgi Klimiashvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/17799493_1262178057164523_4086887637727912217_n.jpg?_nc_cat=0&oh=113abeee8df823f7de668279ecbad81c&oe=5B59E5A5)",
    },
    {
        name: "Tika Dolidze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/29133298_10211341841445482_9121368444770451456_n.jpg?_nc_cat=0&oh=0e3831f52b1e5d0008b00cb7590a4d8f&oe=5B5ABEAC)",
    },
    {
        name: "Giorgi Basilaia",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/31131032_1933995953300244_4574242141763840395_n.jpg?_nc_cat=0&oh=127ff3b680d8893e0af6553feb6f4a53&oe=5B67BFB3)",
    },
    {
        name: "Niko Mdinaradze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c20.0.48.48/p48x48/14021579_1067107516660323_4837825983170079092_n.jpg?_nc_cat=0&oh=795f14412c5f7162171af30e2fd67a14&oe=5B98E93B)",
    },
    {
        name: "Nukri Kvrivishvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/30630009_1634261723295390_7376831560999325757_n.jpg?_nc_cat=0&oh=d9415071b64e43efc77afa97cd5196d9&oe=5B57C124)",
    },
    {
        name: "Medea Aladoshvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c130.0.160.160/p160x160/970017_222954754520613_1063401737_n.jpg?_nc_cat=0&oh=2308e5bb93b4244a6d66157f80bcec33&oe=5B664C8B)",
    },
    {
        name: "Giorgi Klimiashvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/17799493_1262178057164523_4086887637727912217_n.jpg?_nc_cat=0&oh=113abeee8df823f7de668279ecbad81c&oe=5B59E5A5)",
    },
    {
        name: "Tika Dolidze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/29133298_10211341841445482_9121368444770451456_n.jpg?_nc_cat=0&oh=0e3831f52b1e5d0008b00cb7590a4d8f&oe=5B5ABEAC)",
    },
    {
        name: "Giorgi Basilaia",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/31131032_1933995953300244_4574242141763840395_n.jpg?_nc_cat=0&oh=127ff3b680d8893e0af6553feb6f4a53&oe=5B67BFB3)",
    },
    {
        name: "Niko Mdinaradze",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c20.0.48.48/p48x48/14021579_1067107516660323_4837825983170079092_n.jpg?_nc_cat=0&oh=795f14412c5f7162171af30e2fd67a14&oe=5B98E93B)",
    },
    {
        name: "Nukri Kvrivishvili",
        src: "url(https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p48x48/30630009_1634261723295390_7376831560999325757_n.jpg?_nc_cat=0&oh=d9415071b64e43efc77afa97cd5196d9&oe=5B57C124)",
    },
];


var e = document.querySelector('.messenger');
var f = e.querySelector('.list-item');

friends.forEach(function (element, idx) {
    var clone = f.cloneNode(true);
    if (idx == 0) clone = f;
    clone.querySelector('.messenger-avatar').style.backgroundImage = element.src;
    clone.querySelector('.friend-name').innerHTML = element.name;
    e.appendChild(clone);
});