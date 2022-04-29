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



function random_card(cards) {
    // export default cards;
    // import JsonObj from '../data/cards_data.js';
    pickup = Math.floor(Math.random() * cards.length);
    $('#title')[0].innerHTML = cards[pickup].title;
    $('#message')[0].innerHTML = cards[pickup].message;
    $('#description')[0].innerHTML = cards[pickup].description;
}

function today_card(cards) {
    // export default cards;
    // import JsonObj from '../data/cards_data.js';
    pickup = cards.length - 1;
    $('#title')[0].innerHTML = cards[pickup].title;
    $('#message')[0].innerHTML = cards[pickup].message;
    $('#description')[0].innerHTML = cards[pickup].description;
}

// function ajax_test() {
//     console.log('button is clicked')
//     console.log($('p#AJAX')[0].innerHTML)

//     var xmlhttp;
//     xmlhttp = new XMLHttpRequest();

//     xmlhttp.open("GET", "https: //firebasestorage.googleapis.com/b/starfish-fdcc7.appspot.com/o/ajax_test.txt", true);
//     xmlhttp.send();

//     console.log(xmlhttp)
//     xmlhttp.onreadystatechange = function() {
//         $('p#AJAX')[0].innerHTML = xmlhttp.responseText;
//     }
// }