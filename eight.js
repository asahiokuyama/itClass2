//練習問題8-1
function mikuji(){
  var unsei = new Array("大吉","中吉","小吉","吉","末吉","凶","大凶");
  var uranau = Math.random() * 10;
  var kekka = Math.floor(uranau);
  if(kekka >= 7){
    kekka = 0;
  }
  document.getElementById("res").innerHTML = "今日の運勢は" + unsei[kekka] + "です！";
}
//練習問題8-2
function n3() {
    var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var ele = document.getElementById("text080201");

    var t_start = (new Date).getTime();

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length; j++) {
            for (var k=0; k<str.length; k++) {
                ele.value = str[i] + str[j] + str[k];
            }
        }
    }

    var t_end = (new Date).getTime();

    alert("かかった時間は" + (t_end - t_start) + "ミリ秒です");
}
////練習　8-3
function na3() {
    var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var ele = document.getElementById("text080202");

    var t_start = (new Date).getTime();

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length; j++) {
            for (var k=0; k<str.length; k++) {
                ele.value = str[i] + str[j] + str[k];
            }
        }
    }

    var t_end = (new Date).getTime();

    alert("かかった時間は" + (t_end - t_start) + "ミリ秒です");
}
//練習　8-4
function na4() {
    var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D",
               "E","F","G","H","I","J","K","L","M","N","O",
               "P","Q","R","S","T","U","V","W","X","Y","Z"];
    var ele = document.getElementById("text080203");

    var t_start = (new Date).getTime();

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length; j++) {
            for (var k=0; k<str.length; k++) {
                ele.value = str[i] + str[j] + str[k];
            }
        }
    }

    var t_end = (new Date).getTime();
    document.getElementById("text080203").value = (t_end - t_start) + "m秒";
    //
    // alert("かかった時間は" + (t_end - t_start) + "ミリ秒です");
}
function na5() {
    var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var ele = document.getElementById("text080204");

    var t_start = (new Date).getTime();

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length; j++) {
            for (var k=0; k<str.length; k++) {
                for(var p=0; p<str.length; p++){
                  for(q=0; q<str.length; q++){
                    for(o=0; o<str.length; o++){
                      ele.value = str[i] + str[j] + str[k] + str[p] + str[q] + str[o];
                    }
                  }
                }
            }
        }
    }

    var t_end = (new Date).getTime();
    document.getElementById("text080204").value = (t_end - t_start) + "m秒";
    //
    // alert("かかった時間は" + (t_end - t_start) + "ミリ秒です");
}
