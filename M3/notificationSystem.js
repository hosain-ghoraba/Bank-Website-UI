var unreadNotifications = 5;
var notifOneRead = false;
var notifTwoRead = false;
var notifThreeRead = false;
var notifFourRead = false;
var notifFiveRead = false;

document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';

function notificationSystem() {
    Swal.fire({
        html: '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td class="notificationIcon" onclick="markRead1()" style="width:30px; padding-bottom:40px; margin-right:10px"> &nbsp;&nbsp; <i class="material-icons" id="notificationIcon1">mail</i></td>' +
            '<td class="notification" onclick="notificationClick1()"> [REMINDER] Your credit card (ends with 3085) bill is due in 3 days <hr class="menuLine"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="notificationIcon" onclick="markRead2()" style="width:30px; padding-bottom:40px"; margin-right:10px> &nbsp;&nbsp; <i class="material-icons" id="notificationIcon2">mail</i></td>' +
            '<td class="notification" onclick="notificationClick2()"> [REMINDER] The due date for your loan payment ID 5432 is in 3 days <hr class="menuLine"></td>' +
            '</tr> ' +
            '<tr>' +
            '<td class="notificationIcon" onclick="markRead3()" style="width:30px; padding-bottom:40px"; margin-right:10px> &nbsp;&nbsp; <i class="material-icons" id="notificationIcon3">mail</i></td>' +
            '<td class="notification" onclick="notificationClick3()"> [REMINDER] The due date for your bill from Electricity of America-EOA is in 3 days <hr class="menuLine"></td>' +
            '</tr> ' +
            '<tr>' +
            '<td class="notificationIcon" onclick="markRead4()" style="width:30px; padding-bottom:40px"; margin-right:10px> &nbsp;&nbsp; <i class="material-icons" id="notificationIcon4">mail</i></td>' +
            '<td class="notification" onclick="notificationClick4()"> [BANK ANNOUNCEMENT] Quick Bank is celebrating its first anniversary!  <hr class="menuLine"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="notificationIcon" onclick="markRead5()" style="width:30px; padding-bottom:40px"; margin-right:10px> &nbsp;&nbsp; <i class="material-icons" id="notificationIcon5">mail</i></td>' +
            '<td class="notification" onclick="notificationClick5()"> [TECHNICAL ISSUE] Thank you for your valuable feedback. Your issue ID 8762 has now been resolved. <hr class="menuLine"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>',
        customClass: {
            confirmButton: 'customConfirmButton',
            cancelButton: 'customCancelButton',
            popup: 'customSwalContainer'
        }
    });
    if (notifOneRead) {
        document.getElementById("notificationIcon1").style.color = 'green';
        document.getElementById("notificationIcon1").innerText = 'check_circle';
    };
    if (notifTwoRead) {
        document.getElementById("notificationIcon2").style.color = 'green';
        document.getElementById("notificationIcon2").innerText = 'check_circle';
    };
    if (notifThreeRead) {
        document.getElementById("notificationIcon3").style.color = 'green';
        document.getElementById("notificationIcon3").innerText = 'check_circle';
    };
    if (notifFourRead) {
        document.getElementById("notificationIcon4").style.color = 'green';
        document.getElementById("notificationIcon4").innerText = 'check_circle';
    };
    if (notifFiveRead) {
        document.getElementById("notificationIcon5").style.color = 'green';
        document.getElementById("notificationIcon5").innerText = 'check_circle';
    };
};

function notificationClick1() {
    window.location.href = 'user.html';
};

function notificationClick2() {
    markRead2();
};

function notificationClick3() {
    window.location.href = 'Pay2.html';
};

function notificationClick4() {
    markRead4();
};

function notificationClick5() {
    window.location.href = 'report.html';
};

function markRead1() {
    if (notifOneRead) {
        return;
    };
    document.getElementById("notificationIcon1").style.color = 'green';
    document.getElementById("notificationIcon1").innerText = 'check_circle';
    unreadNotifications--;
    document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';
    if (unreadNotifications <= 0) {
        document.getElementById("notificationImage").setAttribute('src', 'notification_icon_1.png');
    }
    notifOneRead = true;
}

function markRead2() {
    if (notifTwoRead) {
        return;
    };
    document.getElementById("notificationIcon2").style.color = 'green';
    document.getElementById("notificationIcon2").innerText = 'check_circle';
    unreadNotifications--;
    document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';
    if (unreadNotifications <= 0) {
        document.getElementById("notificationImage").setAttribute('src', 'notification_icon_1.png');
    }
    notifTwoRead = true;
}

function markRead3() {
    if (notifThreeRead) {
        return;
    };
    document.getElementById("notificationIcon3").style.color = 'green';
    document.getElementById("notificationIcon3").innerText = 'check_circle';
    unreadNotifications--;
    document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';
    if (unreadNotifications <= 0) {
        document.getElementById("notificationImage").setAttribute('src', 'notification_icon_1.png');
    }
    notifThreeRead = true;
}

function markRead4() {
    if (notifFourRead) {
        return;
    };
    document.getElementById("notificationIcon4").style.color = 'green';
    document.getElementById("notificationIcon4").innerText = 'check_circle';
    unreadNotifications--;
    document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';
    if (unreadNotifications <= 0) {
        document.getElementById("notificationImage").setAttribute('src', 'notification_icon_1.png');
    }
    notifFourRead = true;
}

function markRead5() {
    if (notifFiveRead) {
        return;
    };
    document.getElementById("notificationIcon5").style.color = 'green';
    document.getElementById("notificationIcon5").innerText = 'check_circle';
    unreadNotifications--;
    document.getElementById("unreadNotificationsCount").innerText = unreadNotifications + ' unread notifications';
    if (unreadNotifications <= 0) {
        document.getElementById("notificationImage").setAttribute('src', 'notification_icon_1.png');
    }
    notifFiveRead = true;
}