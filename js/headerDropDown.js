
var requests = false;
function showRequests() {
    if (!requests) {
        messages = false;
        document.querySelector('.messages-h').querySelector('.dropdown').style.visibility = "hidden";
        requests = true;
        document.querySelector('.friend-request-h').querySelector('.dropdown').style.visibility = "visible";
        notifications = false;
        document.querySelector('.notifications-h').querySelector('.dropdown').style.visibility = "hidden";
    } else {
        requests = false;
        document.querySelector('.friend-request-h').querySelector('.dropdown').style.visibility = "hidden";
    }
}

var messages = false;
function showMessages() {
    if (!messages) {
        messages = true;
        document.querySelector('.messages-h').querySelector('.dropdown').style.visibility = "visible";
        requests = false;
        document.querySelector('.friend-request-h').querySelector('.dropdown').style.visibility = "hidden";
        notifications = false;
        document.querySelector('.notifications-h').querySelector('.dropdown').style.visibility = "hidden";
    } else {
        messages = false;
        document.querySelector('.messages-h').querySelector('.dropdown').style.visibility = "hidden";
    }
}

var notifications = false
function showNotifications() {
    if (!notifications) {
        requests = false;
        document.querySelector('.friend-request-h').querySelector('.dropdown').style.visibility = "hidden";
        messages = false;
        document.querySelector('.messages-h').querySelector('.dropdown').style.visibility = "hidden";
        notifications = true;
        document.querySelector('.notifications-h').querySelector('.dropdown').style.visibility = "visible";
    } else {
        notifications = false;
        document.querySelector('.notifications-h').querySelector('.dropdown').style.visibility = "hidden";
    }
}