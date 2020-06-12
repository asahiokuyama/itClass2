var size = 12;
var color = "red";
var judge = 0;

function rei1(){
  var ele1 = document.getElementById("ex1");
  if(judge == 0){
    ele1.style.textDecoration = "line-through";
    judge = judge + 1;
  }else{
    ele1.style.textDecoration = "";
    judge = 0;
  }
}




function six1(){
  var elements = document.getElementsByClassName("aaa bbb");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "";
  }

  var ele = document.form1.areas.value;

  var textcolor = document.getElementsByClassName("ccc");
  for (var i = 0; i < textcolor.length; i++) {
    textcolor[i].style.background = ele;
  }

}
function six2(){
  var elements = document.getElementsByClassName("aaa bbb ccc");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "";
  }

  var ele = document.form1.areas.value;

  var textcolor = document.getElementsByClassName("aaa bbb");
  for (var i = 0; i < textcolor.length; i++) {
    textcolor[i].style.background = ele;
  }
}





function ChangeTab1(){
  var ele1 = document.getElementById("tab1");
  var ele2 = document.getElementById("tab2");
  var ele3 = document.getElementById("tab3");

  ele1.style.display = "block";
  ele2.style.display = "none";
  ele3.style.display = "none";
}

var saizu = 3;
function big(){
  var tex1 = document.getElementById("tex1");
  var percent=Number(saizu);
  tex1.style.fontSize = percent + "5%";
  saizu = saizu + 1;
}

function ChangeTab2(){
  var ele1 = document.getElementById("tab1");
  var ele2 = document.getElementById("tab2");
  var ele3 = document.getElementById("tab3");

  ele1.style.display = "none";
  ele2.style.display = "block";
  ele3.style.display = "none";
}

function ChangeTab3(){
  var ele1 = document.getElementById("tab1");
  var ele2 = document.getElementById("tab2");
  var ele3 = document.getElementById("tab3");

  ele1.style.display = "none";
  ele2.style.display = "none";
  ele3.style.display = "block";
}
