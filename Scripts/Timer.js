

var tim;
var hr = '0'+1;
var min = "59";
var sec = "59";
        
function f2() {
    if (parseInt(sec) > 0) {
        sec = parseInt(sec) - 1;
        var list = document.getElementsByClassName("counter");
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML = hr + ":" + min + ":" + sec;
        }
        //document.getElementById("showtime").innerHTML = hr+":"+min+":"+ sec;
        tim = setTimeout("f2()", 1000);
    }
    else {
        if (parseInt(sec) == 0 && parseInt(min) > 0) {
            min = parseInt(min) - 1;
            if (parseInt(min) == 0) {
                clearTimeout(tim);
                location.href = "default5.aspx";
            }
            else {
                sec = 60;
                var list2 = document.getElementsByClassName("counter");
                for (var i = 0; i < list2.length; i++) {
                    list2[i].innerHTML = hr + ":" + min + ":" + sec;
                }
                //document.getElementById("showtime").innerHTML = hr + ":" + min + ":" + sec;
                tim = setTimeout("f2()", 1000);
            }
        }

    }
}
