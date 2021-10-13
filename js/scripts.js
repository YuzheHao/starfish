function update_timestamp() {
    $(document).ready(function() {
        now = new Date()
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var period;
        if (hour > 12) {
            hour -= 12;
            period = "pm";
        } else {
            period = "am";
        }
        if (month < 10) { month = '0' + String(month) };
        if (day < 10) { day = '0' + String(day) };
        if (hour < 10) { hour = '0' + String(hour) };
        if (minute < 10) { minute = '0' + String(minute) };
        if (second < 10) { second = '0' + String(second) };

        var local = `${month}/${day}/${year} ${hour}:${minute}${period} TOKYO`;
        $('time')[0].innerHTML = local
    });
}

var fade_in_from = 0;
var fade_out_from = 10;

function fadeIn(element) {
    var target = document.getElementById(element);
    target.style.display = "block";
    var newSetting = fade_in_from / 10;
    target.style.opacity = newSetting;
    // opacity ranges from 0 to 1
    fade_in_from++;
    if (fade_in_from == 10) {
        target.style.opacity = 1;
        clearTimeout(loopTimer);
        fade_in_from = 0;
        return false;
    }
    var loopTimer = setTimeout('fadeIn(\'' + element + '\')', 100);
}

function fadeOut(element) {
    var target = document.getElementById(element);
    var newSetting = fade_out_from / 10;
    target.style.opacity = newSetting;
    fade_out_from--;
    if (fade_out_from == 0) {
        target.style.opacity = 0;
        target.style.display = "none";
        clearTimeout(loopTimer);
        fade_out_from = 10;
        return false;
    }
    var loopTimer = setTimeout('fadeOut(\'' + element + '\')', 100);
    window.location.href = "link.html";
}