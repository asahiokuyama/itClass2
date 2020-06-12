////////////////
var week = "mon";
var period = 1;
var title = classTitle(week, period);

function classTitle(a,b){
  alert(a + "," + period + "は、ドイツ語。");
}
////////////////
function one(){
  var yo = document.getElementById("youbi").value;
  var jig = document.getElementById("jigen").value;
  var jugyou = classesTitle(yo, jig);
  alert(jugyou);
}

function classesTitle(x,y){
  if(x == "月"){
    if(y == "1"){
      var cla = "ドイツ";
    }else if(y == "4"){
      var cla = "数理解析";
    }else if(y == "5"){
      var cla = "スマートデバイスプログラミング";
    }else{
      var cla = "履修していないか測定不能";
    }
  }
  else if(x == "火"){
    if(y == "2"){
      var cla = "ドイツ";
    }else if(y == "3"){
      var cla = "ライティング技法ワークショップ";
    }else if(y == "4"){
      var cla = "たまに体育";
    }else{
      var cla = "履修していないか測定不能";
    }
  }
  else if(x == "水"){
    if(y == "2"){
      var cla = "ドイツ";
    }else if(y == "3"){
      var cla = "フランス";
    }else{
      var cla = "履修していないか測定不能";
    }
  }
  else if(x == "木"){
    if(y == "1"){
      var cla = "スポーツバイオメカニクス";
    }else if(y == "4"){
      var cla = "情報基礎２";
    }else if(y == "5"){
      var cla = "情報基礎２";
    }else{
      var cla = "履修していないか測定不能";
    }
  }
  else if(x == "金"){
    if(y == "1"){
      var cla = "ドイツ";
    }else if(y == "3"){
      var cla = "パターン情報論";
    }else if(y == "4"){
      var cla = "フランス";
    }else{
      var cla = "履修していないか測定不能";
    }
  }
  else{
    var cla = "履修していないか測定不能";
  }

  return cla;
}
//////////
var timer95 = null;
function startTimer95() {
    if (timer95 == null)
        timer95 = setTimeout(timeout_callback95, 10000);
}
function timeout_callback95(){
  alert("timeout!95");
}
//////////////
var timer96 = null;
function startTimer96() {
    if (timer96 == null)
        timer96 = setInterval(timeout_callback96, 10000);
}

function stopTimer96() {
    if (timer96 != null)
        clearInterval(timer96);
    timer96 = null;
}

function timeout_callback96(){
  alert("timeout!96");
}
////
var timer97 = null;
var count = 0;

function start96(){
  var nyuuryoku = document.getElementById("ex96").value;
  document.getElementById("exarea").innerHTML = "";
  if(timer97 == null){
    timer97 = setInterval(timeout_callback97,1000);
  }
}
function timeout_callback97(){
  var nyuuryoku = document.getElementById("ex96").value;
  var yy = document.getElementById("exarea").innerHTML;
  var kaisuu = nyuuryoku.length;
  document.getElementById("exarea").innerHTML = yy + nyuuryoku.charAt(count);
  count = count+1;
  if(count == kaisuu){
    clearInterval(timer97);
    timer97 = null;
    count = 0;


  }
}
