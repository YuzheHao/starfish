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

        var local = `${month}/${day}/${year} ${hour}:${minute}${period} TYO`;
        $('time')[0].innerHTML = local
    });
}

async function GetRequest(VarName) {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest[VarName];
}