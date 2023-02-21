var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function () {
        d = new Date();
        second = d.getSeconds() * 6; //360/60
        minute = d.getMinutes() * 6 + (second / 60); //360/60
        hour = d.getHours() * 30 + Math.round(minute / 12); //360/12

        document.getElementById('second-hand').style.transform = "rotate(" + second + "deg)";

        document.getElementById('minute-hand').style.transform = "rotate(" + minute + "deg)";

        document.getElementById('hour-hand').style.transform = "rotate(" + hour + "deg)";
    }, 1000
)

function play() {
    var audio = new Audio('clock-ticking-2.mp3');
    audio.play();
}
setInterval(play, 1000)