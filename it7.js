//練習問題7-2
var canvas1 = document.getElementById("canvas4");
var ctx1 = canvas1.getContext('2d');
// var kaku = prompt();

var x1 = 100;  // 中心点のX座標
var y1 = 100;  // 中心点のY座標
var r1 = 80;   // 半径

ctx1.lineWidth = 3.0;
ctx1.strokeStyle = 'black';
ctx1.fillStyle = 'lightgrey';

function seven72(){
  ctx1.clearRect(0,0,200,200);
  // const kaku = document.form1.areas1.value;
  const kaku = 4;
ctx1.beginPath();
for(i = 0;i <= kaku; i++){
  if(i == 0){
    ctx1.moveTo(x1 + Math.sin(i * 2 * Math.PI / kaku) * r1, y1 - Math.cos(i * 2 * Math.PI / kaku) * r1);
  }else{
    ctx1.lineTo(x1 + Math.sin(i * 2 * Math.PI / kaku) * r1, y1 - Math.cos(i * 2 * Math.PI / kaku) * r1);
  }
}
  ctx1.closePath();
  ctx1.fill();
  ctx1.stroke();
}

//練習問題7-3
var canvas2 = document.getElementById("canvas5");
var ctx2 = canvas2.getContext('2d');

var x2 = 100;  // 中心点のX座標
var y2 = 100;  // 中心点のY座標
var r2 = 80;   // 半径

ctx2.lineWidth = 3.0;
ctx2.strokeStyle = 'black';
ctx2.fillStyle = 'lightgrey';

function seven73(){
  ctx2.clearRect(0,0,200,200);
  const kaku = document.form2.areas.value;
ctx2.beginPath();
for(i = 0;i <= kaku; i++){
  if(i == 0){
    ctx2.moveTo(x2 + Math.sin(i * 2 * Math.PI / kaku) * r2, y2 - Math.cos(i * 2 * Math.PI / kaku) * r2);
  }else{
    ctx2.lineTo(x2 + Math.sin(i * 2 * Math.PI / kaku) * r2, y2 - Math.cos(i * 2 * Math.PI / kaku) * r2);
  }
}
  ctx2.closePath();
  ctx2.fill();
  ctx2.stroke();

  var pi0 = 0;
  var pi = Number(pi0);
  pi = kaku*(Math.sin(1/kaku)*Math.PI);
  document.getElementById("pai1").innerText = "π = " + pi;

}


//星型
var canvas74 = document.getElementById('canvas6');
var ctx3 = canvas74.getContext('2d');

var x3 = 100;  // 中心点のX座標
var y3 = 100;  // 中心点のY座標
var r3 = 80;   // 半径

ctx3.lineWidth = 3.0;
ctx3.strokeStyle = 'black';
ctx3.fillStyle = 'lightgrey';

ctx3.beginPath();
ctx3.moveTo(x3 + Math.sin(0 * 2 * Math.PI / 5) * r3, y3 - Math.cos(0 * 2 * Math.PI / 5) * r3);
ctx3.lineTo(x3 + Math.sin(2 * 2 * Math.PI / 5) * r3, y3 - Math.cos(2 * 2 * Math.PI / 5) * r3);//2
ctx3.lineTo(x3 + Math.sin(4 * 2 * Math.PI / 5) * r3, y3 - Math.cos(4 * 2 * Math.PI / 5) * r3);//4
ctx3.lineTo(x3 + Math.sin(1 * 2 * Math.PI / 5) * r3, y3 - Math.cos(1 * 2 * Math.PI / 5) * r3);//1
ctx3.lineTo(x3 + Math.sin(3 * 2 * Math.PI / 5) * r3, y3 - Math.cos(3 * 2 * Math.PI / 5) * r3);//3
ctx3.lineTo(x3 + Math.sin(5 * 2 * Math.PI / 5) * r3, y3 - Math.cos(5 * 2 * Math.PI / 5) * r3);//5
// ctx6.lineTo(x + Math.sin(6 * 2 * Math.PI / 6) * r, y - Math.cos(6 * 2 * Math.PI / 6) * r);
ctx3.closePath();
ctx3.fill();
ctx3.stroke();

//練習問題７−５
var canvas75 = document.getElementById('canvas7');
var ctx4 = canvas75.getContext('2d');

var x, y;
for (y=0; y<200; y+=20) {
  for (x=0; x<200; x+=20) {
    if ((x+y)%40 == 0){
    if((x+y)%80 == 0){
      ctx4.fillStyle = 'black';
      ctx4.fillRect(x, y, 20, 20);
    }
  }
  }
}

//練習問題7-6
var canvas5 = document.getElementById('canvas8');
var ctx5 = canvas5.getContext('2d');

var x, y;
for (y=0; y<200; y+=20) {
  for (x=0; x<200; x+=20) {
    if ((x+y)%40 == 0){
    if((x+y)%80 == 0){
      ctx5.fillStyle = 'black';
      ctx5.fillRect(x, y, 20, 20);
    }else{
      ctx5.fillStyle = "lightgrey";
      ctx5.fillRect(x,y,20,20);
    }
  }
  }
}

//練習問題7-7
var canvas6 = document.getElementById('canvas9');
var ctx6 = canvas6.getContext('2d');

var a, b;
var c, d;
for(b=0;b<200;b+=20){
  for(a=0;a<200;a+=20){
    if(b%40 == 0 || a%40 == 0){
      ctx6.fillStyle = "lightgrey";
      ctx6.fillRect(a,b,20,20);
    }
  }
}
for(d=0;d<200;d+=20){
  for(c=0;c<200;c+=20){
    if(c == d){
      ctx6.fillStyle = "black";
      ctx6.fillRect(c,d,20,20);
    }
  }
}

//練習問題7-8
var canvas7 = document.getElementById("canvas10");
var ctx7 = canvas7.getContext('2d');
var canvas8 = document.getElementById("canvas10");
var ctx8 = canvas8.getContext('2d');
var canvas9 = document.getElementById("canvas10");
var ctx9 = canvas9.getContext('2d');

  var kai = 50;
  var hanx = [];
  var hany = [];
ctx7.fillStyle = "black";
ctx7.strokeRect(0,0,200,200);
ctx8.arc( 100, 100, 100, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
ctx8.stroke();
function seven78s(){
  var n = 0;
  var m = 0;
  var shuu = 0;
  // var kai = 300;
  // var hanx = [];
  // var hany = [];

  for(i = 0; i <= kai; i++){
    var x = Math.random();
    var y = Math.random();

      if((x*x)+(y*y) <= 1){
        m = m + 1;
      }
      if(hanx[i]!=x && hany[i]!=y){
      ctx9.fillStyle = "lightgrey";
      ctx9.strokeRect(x*200,y*200,0.1,0.1);
      shuu = (4*m)/kai;
      document.getElementById("pai").innerText = "π = " + shuu;
    }
      hanx[i] = x;
      hany[i] = y;
    }
kai = kai + 5;

m = 0;
shuu = 0;
}
function seven78r(){
  var canvas7 = document.getElementById("canvas10");
  var ctx7 = canvas7.getContext('2d');
  var canvas8 = document.getElementById("canvas10");
  var ctx8 = canvas8.getContext('2d');
  var canvas9 = document.getElementById("canvas10");
  var ctx9 = canvas9.getContext('2d');

  ctx9.clearRect(0,0,200,200);
  ctx7.fillStyle = "black";
  ctx7.strokeRect(0,0,200,200);
  ctx8.arc( 100, 100, 100, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
  ctx8.stroke();

  document.getElementById("pai").innerText = "π = ???";
}
